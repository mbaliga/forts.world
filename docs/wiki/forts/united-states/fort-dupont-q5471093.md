# Fort DuPont

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-dupont-q5471093` |
| Coordinates | 39.5714, -75.5836 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.5714/-75.5836)) |
| Wikidata | [Q5471093](https://www.wikidata.org/wiki/Q5471093) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | New Castle County |
| Inception | 1863 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | heritage |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 95 elements (outline 1, road 61, building 25, zone 3, water 2, coastline 1, waterway 2).

Evidence: documented 0, mapped 95, inferred 0, derived 1; heights documented 0, inferred 0, unknown 25.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/359233269 historic=heritage Q5471093 98 m from ledger point
- origin moved 104 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":314,"medianInside":0,"medianOutside":2.1}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.5714/-75.5836) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q5471093 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 48 elements); data/traces/fort-dupont-q5471093.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 95 elements; outline osm:way/359233269 historic=heritage Q5471093 98 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
