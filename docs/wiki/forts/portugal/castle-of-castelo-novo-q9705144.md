# Castle of Castelo Novo

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-castelo-novo-q9705144` |
| Coordinates | 40.07797, -7.49625 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.07797/-7.49625)) |
| Wikidata | [Q9705144](https://www.wikidata.org/wiki/Q9705144) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Castelo Novo |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | no |
| OSM `description` | Recinto muralhado |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, marker 2, road 59, building 81, waterway 2, zone 1).

Evidence: documented 0, mapped 147, inferred 0, derived 0; heights documented 4, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/219475402 historic=castle Q9705144 6 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.07797/-7.49625) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=2; wikidata:Q9705144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/castle-of-castelo-novo-q9705144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
