# Old Fort Pierce Park

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-fort-pierce-park-q7084033` |
| Coordinates | 27.43639, -80.32056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/27.43639/-80.32056)) |
| Wikidata | [Q7084033](https://www.wikidata.org/wiki/Q7084033) (CC0) |
| Wikidata class | fort |
| Types | park\|fort |
| Administrative area | Fort Pierce |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |
| OSM `historic` | heritage |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 34 elements (outline 1, road 12, water 2, coastline 1, building 18).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 18.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1454805962 historic=heritage Q7084033 79 m from ledger point
- origin moved 71 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":124,"medianInside":-0.4,"medianOutside":5.7}
- 33 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/27.43639/-80.32056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; park\|fort; sitelinks=2; wikidata:Q7084033 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 116 elements); data/traces/old-fort-pierce-park-q7084033.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 34 elements; outline osm:way/1454805962 historic=heritage Q7084033 79 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
