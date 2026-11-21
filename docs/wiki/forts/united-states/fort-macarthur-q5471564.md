# Fort MacArthur

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-macarthur-q5471564` |
| Coordinates | 33.71196, -118.29618 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.71196/-118.29618)) |
| Wikidata | [Q5471564](https://www.wikidata.org/wiki/Q5471564) (CC0) |
| Wikidata class | fort |
| Types | historic district\|artillery fort |
| Administrative area | California |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 137 elements (outline 1, marker 3, road 35, coastline 1, building 89, retaining-wall 5, zone 2, cliff 1).

Evidence: documented 0, mapped 137, inferred 0, derived 0; heights documented 86, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/407386580 historic=fort 50 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 50 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.71196/-118.29618) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic district\|artillery fort; sitelinks=5; wikidata:Q5471564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 137 elements); data/traces/fort-macarthur-q5471564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
