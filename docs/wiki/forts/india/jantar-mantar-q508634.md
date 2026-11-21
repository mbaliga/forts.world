# Jantar Mantar

> India · Jaipur · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `jantar-mantar-q508634` |
| Coordinates | 26.924722, 75.825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/26.924722/75.825)) |
| Wikidata | [Q508634](https://www.wikidata.org/wiki/Q508634) (CC0) |
| Programme catalogue | confidence high, significance rank 19; sources wikidata:Q508634;wikidata:Q66485;wikidata:Q97119499;unesco:1338;unesco:1605 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | https://whc.unesco.org/en/list/1338 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 47 elements (outline 1, marker 8, road 112, building 114, wall 7, zone 10).

Evidence: documented 0, mapped 47, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/102879535 historic=archaeological_site Q508634 52 m from ledger point
- pruned to the outline plus 25 m: 252 -> 46 elements
- origin moved 55 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/26.924722/75.825) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/jantar-mantar-pass.md](../../../research/jantar-mantar-pass.md)

## Ledger note

Alpha-Q batch (2026-11-11): 10 forts spread across A-Z starting at Q (seq 8); distinct from batch 0 and the K, H, L, X, S, T, Y, U, I sets. type=fort; confidence=high; rank=19; sources=5 \| 2026-11-14: auto-T1 built (data/traces/jantar-mantar-q508634.trace.json, outline+walls), smoke passes; no plan or survey yet, nothing historic drawn. docs/research/jantar-mantar-pass.md \| 2026-11-16: CC0 Commons file Delhi Jantar Mantar Plan outline is a photo of a tactile site plaque (perspective, reflections), not a measured plan; kept as reference only. Jaipur instruments: no open plan found.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
