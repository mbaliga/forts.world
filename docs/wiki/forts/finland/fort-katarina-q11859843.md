# Fort Katarina

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-katarina-q11859843` |
| Coordinates | 60.44945, 26.93729 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.44945/26.93729)) |
| Wikidata | [Q11859843](https://www.wikidata.org/wiki/Q11859843) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kotka |
| Designations | registered archaeological site in Finland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 169 elements (outline 1, road 91, building 51, water 7, wall 2, coastline 1, zone 7, waterway 9).

Evidence: documented 0, mapped 169, inferred 0, derived 1; heights documented 1, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/387651718 historic=fort Q11859843 46 m from ledger point
- origin moved 44 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":71,"medianInside":2,"medianOutside":11.3}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.44945/26.93729) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q11859843 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 169 elements); data/traces/fort-katarina-q11859843.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
