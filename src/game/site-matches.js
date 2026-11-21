// Suggestions only: no identity, coordinate, ownership or evidence is changed.
const normal = s => String(s || '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
  .replace(/\b(fortress|fort|killa)\b/g,' ').replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
function names(f) {
  const values=[f.name,...(f.aliases||[]),...(f.inventory_references||[]).flatMap(r=>r.aliases||[])];
  const out=new Set();
  for(const value of values)for(const v of String(value||'').split(/[\/()]/)){
    const n=normal(v);if(n.length>=3)out.add(n);
  }
  return out;
}
function distance(a,b){
  if(![a.lat,a.lon,b.lat,b.lon].every(Number.isFinite))return null;
  const rad=Math.PI/180, dlat=(b.lat-a.lat)*rad,dlon=(b.lon-a.lon)*rad;
  const x=Math.sin(dlat/2)**2+Math.cos(a.lat*rad)*Math.cos(b.lat*rad)*Math.sin(dlon/2)**2;
  return 6371*2*Math.asin(Math.min(1,Math.sqrt(x)));
}
export function suggestMatches(curated,study,maxDistanceKm=15){
  const byName=new Map(), result=new Map();
  for(const r of study)for(const n of names(r)){
    const key=`${String(r.country||'').trim().toLowerCase()}|${n}`;
    if(!byName.has(key))byName.set(key,[]);byName.get(key).push(r);
  }
  for(const c of curated){
    const found=new Map();
    for(const n of names(c)){
      const key=`${String(c.country||'').trim().toLowerCase()}|${n}`;
      for(const r of byName.get(key)||[]){
        const km=distance(c,r);if(km!==null&&km>maxDistanceKm)continue;
        found.set(r.id,{record:r,km,matchedName:n});
      }
    }
    const ordered=[...found.values()].sort((a,b)=>(a.km??Infinity)-(b.km??Infinity)||a.record.name.localeCompare(b.record.name));
    if(ordered.length)result.set(c.id,ordered);
    for(const item of ordered){
      if(!result.has(item.record.id))result.set(item.record.id,[]);
      result.get(item.record.id).push({record:c,km:item.km,matchedName:item.matchedName});
    }
  }
  return result;
}
