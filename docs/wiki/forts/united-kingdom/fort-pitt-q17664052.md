# Fort Pitt

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-pitt-q17664052` |
| Coordinates | 51.3804, 0.51386 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.3804/0.51386)) |
| Wikidata | [Q17664052](https://www.wikidata.org/wiki/Q17664052) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Medway |
| Inception | 1805 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Public park established to commemorate Queen Victoria’s Diamond Jubilee on land formerly leased from the War Department. |

## What the model contains

Tier **T1**, status `outline+walls`, 352 elements (outline 1, marker 1, road 283, building 234, zone 16, coastline 2, wall 51, retaining-wall 11).

Evidence: documented 0, mapped 352, inferred 0, derived 0; heights documented 88, inferred 0, unknown 94.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/249393014 historic=yes 274 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 234 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 283 mapped (trace size budget); minor lanes are not drawn
- origin moved 274 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.3804/0.51386) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q17664052 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 352 elements); data/traces/fort-pitt-q17664052.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
