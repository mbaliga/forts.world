// A campaign encounter may use only an authored attacking scenario at its date.
export function campaignBattle(levels, node, year, side) {
  const level = levels.find(l => l.id === node.playable);
  if (!level) return null;
  for (const era of level.eras) {
    if (Number(era.id) !== Number(year)) continue;
    const raw = level.battles?.[era.id];
    const scenarios = raw ? (Array.isArray(raw) ? raw : [raw]) : [];
    const scenario = scenarios.find(s => s.playerSide === side && (s.climb || s.surprise));
    if (scenario) return {level, era:era.id, scenario};
  }
  return null;
}
export function battleLosses(pending, result, ownFraction, enemyFraction) {
  if (!['won','lost'].includes(result)) throw new Error('Battle has no final result.');
  for (const f of [ownFraction,enemyFraction]) if (!Number.isFinite(f)||f<0||f>1) throw new Error('Invalid casualty fraction.');
  return {won:result==='won',lossA:Math.round(pending.men*ownFraction),lossD:Math.round(pending.garrison*enemyFraction)};
}

// Campaign scenes are snapshots, not models of every subsequent owner or date.
// A phase boundary or an alternate-history capture needs its own authored scene.
export function fortEraAt(level, year, node = null, currentOwner = null) {
  if (!level || !Number.isInteger(year)) return null;
  const phaseAt = (date) => node?.phases?.find(p => date >= p.from && (p.to == null || date < p.to)) || null;
  const phase = node ? phaseAt(year) : null;
  if (node && (!phase || (currentOwner != null && currentOwner !== phase.owner))) return null;
  return level.eras.filter(e => /^\d{3,4}$/.test(e.id) && Number(e.id) <= year && (e.until == null || (Number.isInteger(e.until) && year < e.until)) && (!node || phaseAt(Number(e.id)) === phase))
    .sort((a,b) => Number(b.id)-Number(a.id))[0] || null;
}
