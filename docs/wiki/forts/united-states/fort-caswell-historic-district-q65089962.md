# Fort Caswell Historic District

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-caswell-historic-district-q65089962` |
| Coordinates | 33.89111, -78.02806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.89111/-78.02806)) |
| Wikidata | [Q65089962](https://www.wikidata.org/wiki/Q65089962) (CC0) |
| Wikidata class | fort |
| Types | historic district\|artillery fort |
| Administrative area | Brunswick County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, coastline 1, road 17, waterway 1, water 2, building 7, zone 4).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/245843230 historic=fort 121 m from ledger point
- origin moved 121 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":25,"medianInside":-2,"medianOutside":-1}
- 80 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.89111/-78.02806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic district\|artillery fort; sitelinks=2; wikidata:Q65089962 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/fort-caswell-historic-district-q65089962.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
