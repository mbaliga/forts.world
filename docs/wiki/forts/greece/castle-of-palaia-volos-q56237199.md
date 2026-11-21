# Castle of Palaia, Volos

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-palaia-volos-q56237199` |
| Coordinates | 39.36422, 22.93312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.36422/22.93312)) |
| Wikidata | [Q56237199](https://www.wikidata.org/wiki/Q56237199) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Volos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 251 elements (outline 1, marker 1, building 53, road 179, zone 10, water 1, waterway 1, wall 3, coastline 1).

Evidence: documented 0, mapped 251, inferred 0, derived 0; heights documented 5, inferred 0, unknown 52.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/44176363 historic=ruins 77 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 78 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.36422/22.93312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q56237199 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 251 elements); data/traces/castle-of-palaia-volos-q56237199.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
