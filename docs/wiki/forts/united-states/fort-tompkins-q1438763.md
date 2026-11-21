# Fort Tompkins

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tompkins-q1438763` |
| Coordinates | 40.6, -74.06111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.6/-74.06111)) |
| Wikidata | [Q1438763](https://www.wikidata.org/wiki/Q1438763) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Staten Island |
| Inception | 1861 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | also known as Fort Wadsworth |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.nps.gov/places/fort-tompkins.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 141 elements (outline 1, marker 1, road 85, building 10, zone 41, coastline 1, waterway 1).

Evidence: documented 0, mapped 141, inferred 0, derived 0; heights documented 8, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3263196 historic=fort Q1438763 677 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 689 m from the ledger point to the centre of the mapped site
- 20 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.6/-74.06111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q1438763 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 141 elements); data/traces/fort-tompkins-q1438763.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
