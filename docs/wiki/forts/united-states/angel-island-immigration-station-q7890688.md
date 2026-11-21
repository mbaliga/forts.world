# Angel Island Immigration Station

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `angel-island-immigration-station-q7890688` |
| Coordinates | 37.86912, -122.42619 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.86912/-122.42619)) |
| Wikidata | [Q7890688](https://www.wikidata.org/wiki/Q7890688) (CC0) |
| Wikidata class | fort |
| Types | fort\|historic district |
| Administrative area | California |
| Designations | National Register of Historic Places listed place\|National Historic Landmark |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.aiisf.org/ |

## What the model contains

Tier **T1**, status `outline-only`, 66 elements (outline 1, marker 5, road 46, building 12, coastline 1, water 1).

Evidence: documented 0, mapped 66, inferred 0, derived 1; heights documented 5, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/449024651 historic=fort Q7890688 42 m from ledger point
- origin moved 44 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":343,"medianInside":-11.4,"medianOutside":47.8}
- 1344 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.86912/-122.42619) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|historic district; sitelinks=3; wikidata:Q7890688 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 66 elements); data/traces/angel-island-immigration-station-q7890688.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
