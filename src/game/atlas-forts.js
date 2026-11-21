import {fortEraAt} from './campaign-battle.js';

// Catalogue dates are approximate evidence, not proof of a precise construction year.
export function catalogueFirstYear(fort, nodes = []) {
 const node = nodes.find(n => n.id === fort.id);
 if (Number.isFinite(node?.phases?.[0]?.from)) return node.phases[0].from;
 const text = String(fort.cent || '');
 const year = text.match(/\b(\d{3,4})\b/);
 if (year) return /\bBCE\b/i.test(text) ? -Number(year[1]) : Number(year[1]);
 const century = text.match(/(\d{1,2})(?:st|nd|rd|th)(?:\s*[–—-]\s*\d{1,2}(?:st|nd|rd|th)?)?\s*c\./i);
 if (century) return /\bBCE\b/i.test(text) ? -Number(century[1])*100 : (Number(century[1])-1)*100;
 return null;
}
export function atlasFortScene(fort, year, levels, nodes = []) {
 const level = levels.find(l => l.id === fort.id);
 if (!level) return null;
 const node = nodes.find(n => n.id === fort.id) || null;
 const era = fortEraAt(level, year, node);
 return era ? {level, era} : null;
}
