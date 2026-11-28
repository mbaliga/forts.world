// An explicit scene link takes precedence over saved or hot-reload state.
// `?fort=` takes a level id, a level's file name (janjira-hand for murud-janjira-hand) or an id ending with it.
import { resolveFortId } from './dropin.js';
export function initialFort(levels,query,hotFort,lastFort){
 const known=id=>levels.some(level=>level.id===id);
 const requested=resolveFortId(levels,new URLSearchParams(query).get('fort'));
 return known(requested)?requested:known(hotFort)?hotFort:known(lastFort)?lastFort:levels[0].id;
}
