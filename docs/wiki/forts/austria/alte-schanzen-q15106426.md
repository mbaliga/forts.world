# Alte Schanzen

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `alte-schanzen-q15106426` |
| Coordinates | 48.31795, 16.42151 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.31795/16.42151)) |
| Wikidata | [Q15106426](https://www.wikidata.org/wiki/Q15106426) (CC0) |
| Wikidata class | fortification |
| Types | sconce |
| Administrative area | Floridsdorf |
| Designations | natural monument in Vienna\|Listed objects in Austria |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `description` | One of 31 small Prussian-Austrian War forts built defenses for the security of Vienna against the Prussian troops moving out of the Marchfeld, (Wikipedia). Only earthworks can be seen here.. |

## What the model contains

Tier **T1**, status `outline-only`, 41 elements (outline 1, road 11, zone 29).

Evidence: documented 0, mapped 41, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/218708293 historic=archaeological_site Q15106426 241 m from ledger point
- origin moved 238 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.31795/16.42151) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; sconce; sitelinks=3; wikidata:Q15106426 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/alte-schanzen-q15106426.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 41 elements; outline osm:way/218708293 historic=archaeological_site Q15106426 241 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
