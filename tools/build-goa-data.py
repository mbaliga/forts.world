"""Build a coarse Goa viewer dataset from ESA WorldCover and Terrarium tiles.

Requires rasterio, numpy and Pillow, plus two downloaded WorldCover 2021 tiles.
Run with network access; see the accompanying research note for limitations.
"""
import base64, concurrent.futures, json, math, pathlib, subprocess
import numpy as np
import rasterio
from PIL import Image
from rasterio.enums import Resampling
from rasterio.windows import from_bounds

west, south, east, north = 73.64, 14.87, 74.36, 15.82
nx, ny, sub, zoom = 400, 528, 4, 10
cache = pathlib.Path('/private/tmp/goa-terrain-z10')
cache.mkdir(exist_ok=True)
count = 2**zoom
def px(lon): return (lon + 180) / 360 * count * 256
def py(lat): return (1 - math.asinh(math.tan(math.radians(lat))) / math.pi) / 2 * count * 256
xs = np.linspace(west, east, nx)
ys = np.linspace(north, south, ny)
xt = np.floor([px(x) for x in xs]).astype(int)
yt = np.floor([py(y) for y in ys]).astype(int)
keys = [(x,y) for x in range(xt.min()//256,xt.max()//256+1) for y in range(yt.min()//256,yt.max()//256+1)]
def get(key):
 x,y=key; file=cache/f'{x}-{y}.png'
 if not file.exists():
  subprocess.run(['curl','--fail','--silent','--show-error','--retry','4','--max-time','45','-o',str(file),f'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{zoom}/{x}/{y}.png'],check=True)
 return key,np.asarray(Image.open(file).convert('RGB'),dtype=np.int32)
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool: tiles=dict(pool.map(get,keys))
elev=np.zeros((ny,nx),dtype=np.int16)
for y in range(ny):
 for x in range(nx):
  a=tiles[(xt[x]//256,yt[y]//256)][yt[y]%256,xt[x]%256]
  elev[y,x]=round(a[0]*256+a[1]+a[2]/256-32768)

# Sample at four times display resolution. A built pixel in those samples clears
# a whole display cell; this still misses small buildings and is not a survey.
hi=np.zeros((ny*sub,nx*sub),dtype=np.uint8)
for tile in ['N15E072','N12E072']:
 file=f'/private/tmp/goa-worldcover-{tile}.tif'
 with rasterio.open(file) as src:
  top=min(north,src.bounds.top); bottom=max(south,src.bounds.bottom)
  if top <= bottom: continue
  r0=round((north-top)/(north-south)*ny*sub); r1=round((north-bottom)/(north-south)*ny*sub)
  hi[r0:r1,:]=src.read(1,window=from_bounds(west,bottom,east,top,src.transform),out_shape=(r1-r0,nx*sub),resampling=Resampling.nearest)
blocks=hi.reshape(ny,sub,nx,sub).transpose(0,2,1,3).reshape(ny,nx,sub*sub)
land=np.zeros((ny,nx),dtype=np.uint8)
for code in [10,20,30,40,50,60,70,80,90,95,100]:
 # Majority for context; built-up gets priority below.
 votes=(blocks==code).sum(axis=2)
 if code==10: best=votes.copy();land[:]=10
 else:
  take=votes>best;land[take]=code;best[take]=votes[take]
land[(blocks==50).any(axis=2)]=50
out={'bounds':[west,south,east,north],'nx':nx,'ny':ny,'elevation':base64.b64encode(elev.astype('<i2').tobytes()).decode(),'cover':base64.b64encode(land.tobytes()).decode(),'coverYear':2021,'zoom':zoom}
target=pathlib.Path(__file__).resolve().parents[1]/'src/goa/terrain.json'
target.write_text(json.dumps(out,separators=(',',':')))
print(f'{len(keys)} terrain tiles; {nx} × {ny} cells; cover classes {dict(zip(*np.unique(land,return_counts=True)))}')
