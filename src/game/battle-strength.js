// Allocate a whole-number force proportionally, preserving its exact total.
export function allocate(total, weights) {
  if(!Number.isInteger(total)||total<0||weights.some(w=>!Number.isFinite(w)||w<0)) throw Error('Invalid force strength.');
  const sum=weights.reduce((a,b)=>a+b,0);
  if(!sum) return weights.map(()=>0);
  const shares=weights.map((w,i)=>{const exact=total*w/sum,whole=Math.floor(exact);return {i,whole,remainder:exact-whole}});
  let left=total-shares.reduce((s,x)=>s+x.whole,0);
  for(const s of [...shares].sort((a,b)=>b.remainder-a.remainder||a.i-b.i)) if(left-->0)s.whole++;
  return shares.map(s=>s.whole);
}
export function representativeCounts(definitions,men) {
  const weights=definitions.map(d=>Math.max(0,Math.floor(d.n)));
  return allocate(Math.min(men,weights.reduce((a,b)=>a+b,0)),weights);
}
export function representedMen(company,live) {
  return company.max ? company.strength*Math.max(0,Math.min(company.max,live))/company.max : 0;
}
export function casualtyFraction(companies,side,liveCount) {
  const selected=companies.filter(c=>c.side===side), total=selected.reduce((n,c)=>n+c.strength,0);
  if(!total) return 0;
  return Math.max(0,Math.min(1,1-selected.reduce((n,c)=>n+representedMen(c,liveCount(c)),0)/total));
}
