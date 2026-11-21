// HydroRIVERS (HydroSHEDS) is NOT included in forts.world.
// Its licence allows use inside an application but forbids distributing the data on its own, and an extract committed to a
// public repository is exactly that (see LICENSES.md). This stub keeps the same exports, so the game builds and simply has
// no fine river network: the strategic map keeps the public-domain Natural Earth rivers from basemap.js.
// To use HydroRIVERS in a private build, run tools/import-hydrorivers.mjs against the downloaded archives; it overwrites
// this file. Do not commit the result.
export const HYDRORIVERS_META = { product: 'HydroRIVERS v1.0', provider: 'HydroSHEDS', included: false, minimumStrahlerOrder: null, note: 'not included in forts.world; see LICENSES.md' };
export const HYDRO_RIVERS = [];
export function decodeHydroPolyline(encoded){let i=0,lat=0,lon=0,out=[];while(i<encoded.length){let result=0,shift=0,b;do{b=encoded.charCodeAt(i++)-63;result|=(b&31)<<shift;shift+=5;}while(b>=32);lat+=(result&1)?~(result>>1):(result>>1);result=0;shift=0;do{b=encoded.charCodeAt(i++)-63;result|=(b&31)<<shift;shift+=5;}while(b>=32);lon+=(result&1)?~(result>>1):(result>>1);out.push([lon/1e4,lat/1e4]);}return out;}
