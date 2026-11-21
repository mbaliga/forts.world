# Casemate d'Oberroedern Sud

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casemate-d-oberroedern-sud-q5048406` |
| Coordinates | 48.92033, 7.98171 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.92033/7.98171)) |
| Wikidata | [Q5048406](https://www.wikidata.org/wiki/Q5048406) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|military museum |
| Administrative area | Oberrœdern |
| Inception | 1930 |
| Wikipedia language editions | 1 |
| OSM `description` | Casemate de la ligne Maginot avec un niveau 1 et un sous sol. |
| OSM `website` | www.casemate-rieffel.fr |

## What the model contains

Tier **T1**, status `outline-only`, 129 elements (outline 1, road 20, building 96, zone 10, water 1, waterway 1).

Evidence: documented 0, mapped 129, inferred 0, derived 0; heights documented 0, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/233959713 historic=(none; chosen by its Wikidata id) Q5048406 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.92033/7.98171) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|military museum; sitelinks=1; wikidata:Q5048406 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 131 elements); data/traces/casemate-d-oberroedern-sud-q5048406.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 129 elements; outline osm:way/233959713 historic=(none; chosen by its Wikidata id) Q5048406 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
