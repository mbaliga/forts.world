# Fort Gerharda

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-gerharda-q9261583` |
| Coordinates | 53.91752, 14.28604 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.91752/14.28604)) |
| Wikidata | [Q9261583](https://www.wikidata.org/wiki/Q9261583) (CC0) |
| Wikidata class | fort |
| Types | architectural heritage monument\|fort |
| Administrative area | Świnoujście |
| Inception | 1859 |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `description` | http://openpoimap.org/?map=various&zoom=19&lat=53.91744&lon=14.28549&layers=B00FFFFFFFFFFFFFTFFFFFF |
| OSM `website` | http://muzeum.swinoujscie.pl/ |

## What the model contains

Tier **T1**, status `outline-only`, 182 elements (outline 1, marker 25, coastline 5, road 92, building 44, zone 5, water 3, waterway 4, retaining-wall 3).

Evidence: documented 0, mapped 182, inferred 0, derived 1; heights documented 21, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/481828274 historic=fort Q9261583 36 m from ledger point
- origin moved 40 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":145,"medianInside":-4,"medianOutside":3.6}
- 477 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.91752/14.28604) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; architectural heritage monument\|fort; sitelinks=3; wikidata:Q9261583 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 182 elements); data/traces/fort-gerharda-q9261583.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
