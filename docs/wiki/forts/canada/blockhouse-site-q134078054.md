# blockhouse site

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `blockhouse-site-q134078054` |
| Coordinates | 46.80313, -71.21072 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.80313/-71.21072)) |
| Wikidata | [Q134078054](https://www.wikidata.org/wiki/Q134078054) (CC0) |
| Wikidata class | ruin |
| Types | blockhouse\|ruins |
| Administrative area | Quebec City |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 214 elements (outline 1, marker 26, road 109, retaining-wall 13, building 50, waterway 1, wall 8, zone 2, cliff 3).

Evidence: documented 0, mapped 214, inferred 0, derived 0; heights documented 20, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/392156904 historic=citywalls 351 m from ledger point
- origin moved 350 m from the ledger point to the centre of the mapped site
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.80313/-71.21072) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; blockhouse\|ruins; sitelinks=1; wikidata:Q134078054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 214 elements); data/traces/blockhouse-site-q134078054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
