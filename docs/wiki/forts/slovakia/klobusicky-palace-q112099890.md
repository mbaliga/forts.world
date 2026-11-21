# Klobušický Palace

> Slovakia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `klobusicky-palace-q112099890` |
| Coordinates | 48.99504, 21.24339 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.99504/21.24339)) |
| Wikidata | [Q112099890](https://www.wikidata.org/wiki/Q112099890) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Prešov |
| Inception | 1800 |
| Designations | cultural heritage of Slovakia |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `website` | https://www.sarisskahradnacesta.sk/pamiatka/palac-klobusickych-presov/ |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 24, road 274, building 195, zone 7, wall 53, water 2, retaining-wall 2).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 6, inferred 0, unknown 169.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1231168 historic=castle Q112099890 6 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 195 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 274 mapped (trace size budget); minor lanes are not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.99504/21.24339) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=0; wikidata:Q112099890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/klobusicky-palace-q112099890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/slovakia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
