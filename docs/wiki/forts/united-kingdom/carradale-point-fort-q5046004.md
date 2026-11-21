# Carradale Point Fort

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `carradale-point-fort-q5046004` |
| Coordinates | 55.57296, -5.4672 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.57296/-5.4672)) |
| Wikidata | [Q5046004](https://www.wikidata.org/wiki/Q5046004) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|contour fort |
| Administrative area | Argyll and Bute |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | https://portal.historicenvironment.scot/designation/SM2180 |
| OSM `description` | vitrified_fort |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 1, road 1, water 5).

Evidence: documented 0, mapped 8, inferred 0, derived 5; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1044255734 historic=archaeological_site Q5046004 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":153,"medianInside":-2,"medianOutside":2}
- sea-1: DEM check failed {"cells":144,"medianInside":2,"medianOutside":-2}
- sea-2: DEM check failed {"cells":397,"medianInside":1.8,"medianOutside":-2}
- sea-3: DEM check failed {"cells":400,"medianInside":1.8,"medianOutside":-2}
- sea-4: DEM check failed {"cells":400,"medianInside":1.8,"medianOutside":-2}
- 196 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.57296/-5.4672) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|contour fort; sitelinks=1; wikidata:Q5046004 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/carradale-point-fort-q5046004.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
