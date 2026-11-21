import {NODES as AB} from '../data/konkan.js';
import {NODES_C, NODES_D} from '../data/south.js';
// Only exact authored IDs link to the campaign; study records have independent IDs.
export function campaignSite(id) {
  for (const [region,nodes] of [['AB',AB],['C',NODES_C],['D',NODES_D]]) {
    const node=nodes.find(n=>n.id===id);
    if(node)return {region,node};
  }
  return null;
}
export function matchesRegion(record,region) {
  if(!region)return true;
  const name=String(record.region||'').toLocaleLowerCase();
  return name.split(/[·,]/).some(part=>part.trim()===region.toLocaleLowerCase());
}
