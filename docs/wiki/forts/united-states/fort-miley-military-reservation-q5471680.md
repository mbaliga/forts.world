# Fort Miley Military Reservation

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-miley-military-reservation-q5471680` |
| Coordinates | 37.78214, -122.50554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.78214/-122.50554)) |
| Wikidata | [Q5471680](https://www.wikidata.org/wiki/Q5471680) (CC0) |
| Wikidata class | fort |
| Types | park\|fort |
| Administrative area | San Francisco |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 242 elements (outline 1, marker 2, road 110, building 122, coastline 1, retaining-wall 1, wall 4, zone 1).

Evidence: documented 0, mapped 242, inferred 0, derived 0; heights documented 121, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1533773221 historic=ruins 258 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 258 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.78214/-122.50554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; park\|fort; sitelinks=2; wikidata:Q5471680 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 242 elements); data/traces/fort-miley-military-reservation-q5471680.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
