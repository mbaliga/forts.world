# Fort de Montrouge

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-montrouge-q3078203` |
| Coordinates | 48.8078, 2.32161 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.8078/2.32161)) |
| Wikidata | [Q3078203](https://www.wikidata.org/wiki/Q3078203) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Arcueil |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 245 elements (outline 1, road 846, zone 84, waterway 2, building 848, wall 62, retaining-wall 5).

Evidence: documented 0, mapped 245, inferred 0, derived 0; heights documented 15, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62646379 historic=(none; chosen by its Wikidata id) Q3078203 45 m from ledger point
- pruned to the outline plus 150 m: 1848 -> 1198 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 543 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 550 mapped (trace size budget); minor lanes are not drawn
- origin moved 45 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.8078/2.32161) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3078203 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 218 elements); data/traces/fort-de-montrouge-q3078203.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 245 elements; outline osm:way/62646379 historic=(none; chosen by its Wikidata id) Q3078203 45 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
