# Fort Griswold

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-griswold-q5471260` |
| Coordinates | 41.3553, -72.082 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.3553/-72.082)) |
| Wikidata | [Q5471260](https://www.wikidata.org/wiki/Q5471260) (CC0) |
| Wikidata class | fort |
| Types | protected area\|artillery fort\|military museum |
| Administrative area | New London County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `ruins` | yes |
| OSM `website` | https://www.fortgriswold.org/ |

## What the model contains

Tier **T1**, status `outline+walls`, 249 elements (outline 1, marker 5, road 44, coastline 1, zone 11, wall 11, building 175, waterway 1).

Evidence: documented 0, mapped 249, inferred 0, derived 0; heights documented 3, inferred 0, unknown 183.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/20010702 historic=fort Q5471260 209 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 233 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.3553/-72.082) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; protected area\|artillery fort\|military museum; sitelinks=3; wikidata:Q5471260 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 249 elements); data/traces/fort-griswold-q5471260.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
