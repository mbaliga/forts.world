# Agia Triada Fort

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `agia-triada-fort-q56397579` |
| Coordinates | 37.97647, 23.38873 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.97647/23.38873)) |
| Wikidata | [Q56397579](https://www.wikidata.org/wiki/Q56397579) (CC0) |
| Wikidata class | fort |
| Types | archaeological site\|fort |
| Administrative area | Megara Municipality |
| Designations | archaeological site in Greece\|protected building in Greece |
| Wikipedia language editions | 0 |
| OSM `historic` | fortification |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline+walls`, 38 elements (outline 1, coastline 2, road 24, zone 5, building 3, wall 1, water 2).

Evidence: documented 0, mapped 38, inferred 0, derived 2; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/293408948 historic=fortification Q56397579 12 m from ledger point
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":55,"medianInside":0,"medianOutside":11.5}
- sea-1: DEM check ok {"cells":113,"medianInside":0,"medianOutside":12.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.97647/23.38873) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; archaeological site\|fort; sitelinks=0; wikidata:Q56397579 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 38 elements); data/traces/agia-triada-fort-q56397579.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
