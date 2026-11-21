// Keep original catalogue indices so list numbers and map markers stay aligned.
export function explorerMatches(levels, query) {
  const words=String(query ?? '').normalize('NFKC').toLocaleLowerCase().trim().split(/\s+/u).filter(Boolean);
  return levels.map((level,index)=>({level,index})).filter(({level})=>{
    const text=[level.name,level.id,level.region,level.type,level.native?.text].filter(Boolean).join(' ').normalize('NFKC').toLocaleLowerCase();
    return words.every(word=>text.includes(word));
  });
}
