// An explicit scene link takes precedence over saved or hot-reload state.
export function initialFort(levels,query,hotFort,lastFort){
 const known=id=>levels.some(level=>level.id===id);
 const requested=new URLSearchParams(query).get('fort');
 return known(requested)?requested:known(hotFort)?hotFort:known(lastFort)?lastFort:levels[0].id;
}
