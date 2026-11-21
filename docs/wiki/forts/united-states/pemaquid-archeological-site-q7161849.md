# Pemaquid Archeological Site

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pemaquid-archeological-site-q7161849` |
| Coordinates | 43.87806, -69.52139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.87806/-69.52139)) |
| Wikidata | [Q7161849](https://www.wikidata.org/wiki/Q7161849) (CC0) |
| Wikidata class | fort |
| Types | fort\|archaeological site\|state historic site in the United States |
| Administrative area | Bristol |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, road 12, coastline 12, waterway 1, building 1, wall 6, water 2).

Evidence: documented 0, mapped 35, inferred 0, derived 2; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/512994843 historic=fort Q5472349 180 m from ledger point
- origin moved 180 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":250,"medianInside":1.3,"medianOutside":6.6}
- sea-1: DEM check ok {"cells":399,"medianInside":1.3,"medianOutside":5.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.87806/-69.52139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|archaeological site\|state historic site in the United States; sitelinks=4; wikidata:Q7161849 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/pemaquid-archeological-site-q7161849.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
