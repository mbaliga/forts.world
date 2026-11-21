// Import is temporary and does not attribute user-provided data to the published study.
export function normalizeRows(rows) {
  const get=(r,names)=>{for(const name of names){const k=Object.keys(r).find(x=>x.toLowerCase().replace(/[^a-z]/g,'')===name);if(k!==undefined)return r[k]}return ''};
  const number=v=>v===null||v===undefined||String(v).trim()===''?null:Number(v);
  return rows.filter(r=>r && typeof r==='object').map((r,i)=>{
    let lat=number(get(r,['latitude','lat'])),lon=number(get(r,['longitude','lon','lng']));
    if (!Number.isFinite(lat)||!Number.isFinite(lon)||Math.abs(lat)>90||Math.abs(lon)>180) lat=lon=null;
    return {id:`user-import-${i}`,name:String(get(r,['nameoffortification','fortname','sitename','name','fortification'])||`Unnamed record ${i+1}`),country:String(get(r,['country','nation'])||'Unspecified').trim(),region:String(get(r,['stateprovince','state','province','region','district','location'])),lat,lon,type:'fortification',sourceRecord:true,sourceName:'User-imported file',playable:false,set:0};
  });
}
export function parseCSV(text) {
  const rows=[];let row=[],cell='',quoted=false;
  text=text.replace(/^\uFEFF/,'');
  for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'&&quoted&&text[i+1]==='"'){cell+='"';i++}else if(c==='"')quoted=!quoted;else if(c===','&&!quoted){row.push(cell);cell=''}else if((c==='\n'||c==='\r')&&!quoted){if(c==='\r'&&text[i+1]==='\n')i++;row.push(cell);rows.push(row);row=[];cell=''}else cell+=c}
  if(quoted)throw Error('Unclosed quoted field in CSV');
  if(cell||row.length){row.push(cell);rows.push(row)}
  const headers=rows.shift()||[];return rows.filter(r=>r.some(v=>v.trim())).map(r=>Object.fromEntries(r.map((v,i)=>[headers[i]||`column${i}`,v])));
}
export async function readFortFile(file){
  const ext=file.name.toLowerCase().split('.').pop();
  if(ext==='json'){const p=JSON.parse(await file.text());return normalizeRows(Array.isArray(p)?p:(p.features||[]).map(f=>({...f.properties,...(f.geometry?.type==='Point'?{lon:f.geometry.coordinates[0],lat:f.geometry.coordinates[1]}:{})})))}
  if(ext==='csv')return normalizeRows(parseCSV(await file.text()));
  if(ext!=='xlsx'&&ext!=='xls')throw Error('Choose an XLSX, XLS, CSV or JSON file.');
  const XLSX=await import('https://cdn.jsdelivr.net/npm/xlsx@0.18.5/+esm');
  const wb=XLSX.read(await file.arrayBuffer(),{type:'array'});return normalizeRows(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]],{defval:''}));
}
