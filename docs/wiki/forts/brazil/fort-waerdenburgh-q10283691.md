# Fort Waerdenburgh

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-waerdenburgh-q10283691` |
| Coordinates | -8.05596, -34.8767 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-8.05596/-34.8767)) |
| Wikidata | [Q10283691](https://www.wikidata.org/wiki/Q10283691) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Recife |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, coastline 1, road 42, waterway 1, building 11, water 2, zone 2, wall 2).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5524000 historic=fort Q10284020 721 m from ledger point
- origin moved 717 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":2,"medianInside":5.4,"medianOutside":5.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-8.05596/-34.8767) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q10283691 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/fort-waerdenburgh-q10283691.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
