# Castle of Kythira

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-kythira-q12878515` |
| Coordinates | 36.14619, 22.99146 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.14619/22.99146)) |
| Wikidata | [Q12878515](https://www.wikidata.org/wiki/Q12878515) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress |
| Administrative area | Kythira Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | 13th century Venetian castle |

## What the model contains

Tier **T1**, status `outline+walls`, 239 elements (outline 1, coastline 1, building 150, cliff 2, road 63, wall 16, waterway 1, retaining-wall 5).

Evidence: documented 0, mapped 239, inferred 0, derived 0; heights documented 3, inferred 0, unknown 168.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/299843509 historic=castle Q12878515 32 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 32 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.14619/22.99146) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress; sitelinks=3; wikidata:Q12878515 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 239 elements); data/traces/castle-of-kythira-q12878515.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
