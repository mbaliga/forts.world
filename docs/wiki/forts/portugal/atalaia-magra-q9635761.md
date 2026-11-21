# Atalaia Magra

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaia-magra-q9635761` |
| Coordinates | 38.13804, -7.41772 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.13804/-7.41772)) |
| Wikidata | [Q9635761](https://www.wikidata.org/wiki/Q9635761) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Moura (Santo Agostinho e São João Baptista) e Santo Amador |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `historic` | watchtower |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, road 4, waterway 1).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/807610643 historic=watchtower Q9635761 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.13804/-7.41772) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=4; wikidata:Q9635761 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 2 elements); data/traces/atalaia-magra-q9635761.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 6 elements; outline osm:way/807610643 historic=watchtower Q9635761 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
