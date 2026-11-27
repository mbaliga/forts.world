# Ksar Ouled Soltane, Tunisia: fort-fidelity pass (world batch, mapped T1 plus schematic constructed layer)

Date of pass: 2026-11-27. Trace: `src/levels/ksar-ouled-soltane-q2670896.trace.js` (from `data/traces/ksar-ouled-soltane-q2670896.trace.json` plus `tools/trace/curation/ksar-ouled-soltane-q2670896.mjs`). Level: `src/levels/ksar-ouled-soltane-q2670896.js`.
**Status: `needs-plan`, tier T1.** Raw geometry (`data/geometry/<id>/`) had not arrived when the pass ended, so the OSM shapes come from the auto trace. No plan, survey or dated image was read; only tertiary pages (Wikipedia, travel sites). Hence no T2.

## Documented (written sources; no primary source read)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Type, place | fortified granary (ksar), Tataouine district, about 20 km south of Tataouine | Wikipedia; amusingplanet | secondary |
| Founding | 15th century, by Berbers, of adobe, on a hilltop against raiders | amusingplanet; guide-voyage-tunisie; Atlas Obscura | tertiary, agree |
| Extension | second courtyard added in the 19th century; no year, no builder | amusingplanet; guide-voyage-tunisie | tertiary |
| Courtyards | two, each ringed by multi-storey vaulted ghorfas; joined by a passage of palm wood | Wikipedia; amusingplanet | tertiary |
| Ghorfas | "hundreds" at first, about 400 after the extension; each one family's; four storeys; steep external stairs to a single door each | amusingplanet; guide-voyage-tunisie | tertiary |
| Ghorfa form | barrel-vaulted rooms 4-5 m long, about 2 m high, single central door; vaults in continuous series; built with sand-sack formwork and clay; stacked up to four or five levels; ground floor sometimes caretakers and animals | socks-studio; Wikipedia "Ghorfa" | secondary |
| Type dating | collective granaries of the region generally 14th century | Wikipedia "Ghorfa" | secondary |
| Repair | repaired 1997, with cement instead of mud and brick | amusingplanet | tertiary |
| Today | tourist site, new cafe, Star Wars: The Phantom Menace set (Mos Espa slave quarters) | Wikipedia; looklex | tertiary |
| Conflict | Atlas Obscura calls the plan an "oval fortification"; the OSM outline is not oval | Atlas Obscura vs OSM | unresolved, not drawn |

## Mapped (OpenStreetMap, ODbL)
One outline (relation 2516832, historic=ruins, wikidata Q2670896), about 100 x 45 m, 63 vertices, round both courtyards; 10 untagged building footprints and two wall lines to the north and east; roads. All footprints are drawn kerb-high (no height tags). Terrain: Terrarium z15, 30 m source: 459-509 m, it cannot show terraces.

## Constructed (schematic) layer: how it is built
Ghorfa bays (two 2.5 m cells, 5.0 x 5.5 m) in a ring 5.5 m deep round a west courtyard (38 x 29 m, rotated -5 degrees) and an east courtyard (44 x 38 m, +13 degrees), placed on the envelope of the OSM outline by eye. Roof is the engine's barrel `vault`; height 4 storeys x 2.8 m = 11.2 m (rule: four storeys from the sources, 2 m room plus vault and slab assumed). Each courtyard has one assumed 5 m opening. Every element is `ev: schematic`, tinted, basis cited.
Which courtyard is the 15th-century one is **assumed** (west) from the outline shape; no source says.

## Not drawn, and why
- External stairs: no engine element for a stair on a building face in `t1.js` schematic kinds.
- Vault axis: ghorfa vaults run front to back; bays are drawn that way, but each bay merges two cells.
- Gate and entrance: no source gives its place or form.
- Palm-wood passage between courtyards, mosque, oil press, ground-floor stables: no position found.
- Staggered storey counts per row or per phase: no source.
- The NE wall lines and buildings of the OSM: use unknown; shown only in `today`.
- Plan, elevation, ghorfa counts per row: none found. Needed to reach T2: a survey plan (a Tunisian heritage body INP/AMVPPC, a journal paper, or a drone orthophoto).
