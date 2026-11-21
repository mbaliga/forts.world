# Fathom Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fathom-castle-q5437760` |
| Coordinates | 54.0401, -6.1863 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.0401/-6.1863)) |
| Wikidata | [Q5437760](https://www.wikidata.org/wiki/Q5437760) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `heritage` | yes |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 353 elements (outline 1, marker 1, coastline 1, road 71, building 237, water 2, waterway 1, zone 10, wall 29).

Evidence: documented 0, mapped 353, inferred 0, derived 1; heights documented 94, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220184983 historic=castle Q28232372 8 m from ledger point
- origin moved 7 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":49,"medianInside":2.5,"medianOutside":7.2}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.0401/-6.1863) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q5437760 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 353 elements); data/traces/fathom-castle-q5437760.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
