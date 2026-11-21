# Nyenschantz

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nyenschantz-q384167` |
| Coordinates | 59.94384, 30.40678 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.94384/30.40678)) |
| Wikidata | [Q384167](https://www.wikidata.org/wiki/Q384167) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|archaeological site\|destroyed building or structure |
| Administrative area | Krasnogvardeysky District |
| Inception | 1611 |
| Designations | federal cultural heritage site in Russia |
| Wikipedia language editions | 19 |
| OSM `historic` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 67 elements (outline 1, building 18, road 43, waterway 1, wall 3, zone 1).

Evidence: documented 0, mapped 67, inferred 0, derived 0; heights documented 4, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/45743911 historic=building 714 m from ledger point
- origin moved 714 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.94384/30.40678) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|archaeological site\|destroyed building or structure; sitelinks=19; wikidata:Q384167 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 67 elements); data/traces/nyenschantz-q384167.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
