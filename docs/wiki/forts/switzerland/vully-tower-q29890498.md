# Vully Tower

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vully-tower-q29890498` |
| Coordinates | 46.87983, 7.03829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.87983/7.03829)) |
| Wikidata | [Q29890498](https://www.wikidata.org/wiki/Q29890498) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower\|no\|tower\|built structure |
| Administrative area | Avenches |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 3, road 207, building 190, zone 15, wall 24, retaining-wall 6).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 11, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51444104 historic=archaeological_site 350 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 190 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 207 mapped (trace size budget); minor lanes are not drawn
- origin moved 349 m from the ledger point to the centre of the mapped site
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.87983/7.03829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower\|no\|tower\|built structure; sitelinks=1; wikidata:Q29890498 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/vully-tower-q29890498.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
