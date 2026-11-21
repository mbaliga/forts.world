# usage: python3 shoot.py prefix html=... [actions...]
# actions: era=<id> zoom=<viewH> rot=<az> goto=x,y,h look=x,y,h wait=ms shot:<label> size=WxH el=<deg> lens=0|1 js=<code>
import sys, asyncio, os
from playwright.async_api import async_playwright
args = sys.argv[1:]
prefix = args[0]; acts = args[1:]
html = None; size = (1400, 900)
for a in acts:
    if a.startswith('html='): html = a[5:]
    if a.startswith('size='): w, h = a[5:].split('x'); size = (int(w), int(h))
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'shots')
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'])
        pg = await b.new_page(viewport={'width': size[0], 'height': size[1]})
        pg.on('console', lambda m: print('[console]', m.text) if ('forts' in m.text or m.type == 'error') else None)
        pg.on('pageerror', lambda e: print('[pageerror]', e))
        await pg.goto('file://' + html)
        await pg.wait_for_function('window.__app && window.__app.world', timeout=180000)
        await pg.wait_for_timeout(1500)
        await pg.evaluate("document.querySelectorAll('#help,.card,#drawer').forEach(e=>e.hidden=true)")
        n = 0
        for a in acts:
            if a.startswith('html=') or a.startswith('size='): continue
            if a.startswith('era='):
                await pg.evaluate(f"window.__app.setEra('{a[4:]}')")
                await pg.wait_for_function(f"window.__app.era==='{a[4:]}'", timeout=240000)
                await pg.wait_for_timeout(1200)
            elif a.startswith('zoom='): await pg.evaluate(f"(()=>{{const c=window.__app.cam;c.goalViewH=c.viewH={a[5:]};}})()")
            elif a.startswith('rot='): await pg.evaluate(f"(()=>{{const c=window.__app.cam;c.goalAz=c.az={a[4:]};}})()")
            elif a.startswith('el='): await pg.evaluate(f"(()=>{{const c=window.__app.cam;c.el={a[3:]};}})()")
            elif a.startswith('lens='): await pg.evaluate(f"(()=>{{window.__app.state.lens={'true' if a[5:]=='1' else 'false'};window.__app.ui.applyLens();}})()")
            elif a.startswith('goto='):
                x, y, h = a[5:].split(',')
                await pg.evaluate(f"(()=>{{const A=window.__app;A.traveller.place({x},{y},{h});A.freeCam=0;A.cam.jumpTo({x},{y},{h});}})()")
            elif a.startswith('look='):
                x, y, h = a[5:].split(',')
                await pg.evaluate(f"(()=>{{const A=window.__app;A.freeCam=1e9;A.cam.jumpTo({x},{y},{h});}})()")
            elif a.startswith('wait='): await pg.wait_for_timeout(int(a[5:]))
            elif a.startswith('js='): print(await pg.evaluate(a[3:]))
            elif a.startswith('shot'):
                label = a.split(':', 1)[1] if ':' in a else str(n)
                await pg.evaluate("window.__app.renderer.shadowMap.needsUpdate=true; window.__app.lastShadow.set(1e9,0,0)")
                await pg.wait_for_timeout(900)
                f = os.path.join(OUT, f'{prefix}-{label}.png')
                await pg.screenshot(path=f, timeout=180000); print('shot', f); n += 1
        await b.close()
asyncio.run(main())
