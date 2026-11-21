# Casemate of the mont des Bruyères

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casemate-of-the-mont-des-bruyeres-q30739295` |
| Coordinates | 50.43841, 3.45636 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.43841/3.45636)) |
| Wikidata | [Q30739295](https://www.wikidata.org/wiki/Q30739295) (CC0) |
| Wikidata class | fortification |
| Types | casemate |
| Wikipedia language editions | 2 |
| OSM `historic` | bunker |

## What the model contains

Tier **T1**, status `outline+walls`, 159 elements (outline 1, road 13, zone 4, building 135, wall 4, retaining-wall 2).

Evidence: documented 0, mapped 159, inferred 0, derived 0; heights documented 0, inferred 0, unknown 141.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19754584 historic=bunker Q30739295 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.43841/3.45636) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; casemate; sitelinks=2; wikidata:Q30739295 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 163 elements); data/traces/casemate-of-the-mont-des-bruyeres-q30739295.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 159 elements; outline osm:relation/19754584 historic=bunker Q30739295 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
