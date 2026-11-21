import { mountStandaloneFortMap } from './game/fortmap.js';

const style = document.createElement('style');
style.textContent = `:root{--paper:#f4f1e8;--paper-tex:none;--ink:#29251e;--muted:#756d60;--rule:rgba(41,37,30,.2);--font-serif:Georgia,'Times New Roman',serif;--font-body:system-ui,-apple-system,'Segoe UI',sans-serif;--font-data:ui-monospace,SFMono-Regular,Menlo,monospace}html,body{width:100%;height:100%;margin:0;background:#d5e0dc;color:var(--ink);font:14px/1.45 var(--font-body)}*{box-sizing:border-box}`;
document.head.append(style);

document.documentElement.dataset.theme = 'light';
document.title = 'Forts of the Subcontinent — Interactive Map';
mountStandaloneFortMap();
