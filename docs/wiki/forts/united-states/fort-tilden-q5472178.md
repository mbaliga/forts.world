# Fort Tilden

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-tilden-q5472178` |
| Coordinates | 40.56111, -73.89583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.56111/-73.89583)) |
| Wikidata | [Q5472178](https://www.wikidata.org/wiki/Q5472178) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Queens |
| Inception | 1917 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, road 17, zone 2, building 3, coastline 2, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/285103783 historic=fort 349 m from ledger point
- origin moved 349 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":113,"medianInside":1.4,"medianOutside":3.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.56111/-73.89583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q5472178 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/fort-tilden-q5472178.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
