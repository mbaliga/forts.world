// Route through authored campaign waypoints when both endpoints belong to one
// regional graph. These scenario links are distinct from terrain-derived routes.
const CLOSED = Infinity;
function seasonalCost(kind, days, month) {
  if (kind === 'sea' && month >= 6 && month <= 9) return CLOSED;
  if (kind === 'sea-e' && month >= 10 && month <= 12) return days * 3;
  if (month >= 6 && month <= 9) return days * ({ road: 2, ghat: 3, ferry: 3 }[kind] || 1);
  return days;
}

export function routeCampaignNetwork(start, end, routeData, month, allowSea, year) {
  for (const [nodes, routes, region] of routeData) {
    const byId = new Map(nodes.filter(n => !n.phases?.length || n.phases.some(p => year >= p.from && (p.to == null || year < p.to))).map(n => [n.id, n]));
    if (!start.id || !end.id || !byId.has(start.id) || !byId.has(end.id)) continue;
    const costs = new Map([[start.id, 0]]), previous = new Map(), edges = new Map();
    for (const [a, b, kind, days] of routes) {
      const cost = seasonalCost(kind, days, month);
      if (!Number.isFinite(cost) || (!allowSea && (kind === 'sea' || kind === 'sea-e'))) continue;
      for (const [from, to] of [[a,b],[b,a]]) {
        if (!byId.has(from) || !byId.has(to)) continue;
        const list = edges.get(from) || []; list.push({ to, kind, days: cost }); edges.set(from, list);
      }
    }
    const open = new Set(byId.keys());
    while (open.size) {
      let current = null, best = Infinity;
      for (const id of open) if ((costs.get(id) ?? Infinity) < best) { current = id; best = costs.get(id); }
      if (current == null || current === end.id) break;
      open.delete(current);
      for (const edge of edges.get(current) || []) {
        const next = best + edge.days;
        if (next < (costs.get(edge.to) ?? Infinity)) { costs.set(edge.to, next); previous.set(edge.to, { id: current, edge }); }
      }
    }
    if (!Number.isFinite(costs.get(end.id))) continue;
    const ids = [end.id], kinds = [], linkDays = []; let cursor = end.id;
    while (cursor !== start.id) { const prev = previous.get(cursor); if (!prev) break; kinds.unshift(prev.edge.kind); linkDays.unshift(prev.edge.days); cursor = prev.id; ids.unshift(cursor); }
    if (ids[0] !== start.id) continue;
    const path = ids.map(id => [byId.get(id).lon, byId.get(id).lat]), pathDays = [0];
    for (const days of linkDays) pathDays.push(pathDays.at(-1) + days);
    let distanceKm=0,seaKm=0; for(let i=1;i<path.length;i++){const lat=(path[i-1][1]+path[i][1])*Math.PI/360,distance=Math.hypot((path[i][0]-path[i-1][0])*111.32*Math.cos(lat),(path[i][1]-path[i-1][1])*111.32);distanceKm+=distance;if(kinds[i-1]==='sea'||kinds[i-1]==='sea-e')seaKm+=distance;}
    return { path, pathDays, estimatedDays: costs.get(end.id), distanceKm, seaKm, networkRegion: region, networkKinds: kinds, networkEvidence: 'authored scenario links; not georeferenced historic roads', riverCrossings: [], riverCrossingDays: 0, seasonProfile: 'campaign-network seasonal rules' };
  }
  return null;
}
