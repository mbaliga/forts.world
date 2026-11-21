# Bruille Sud 1

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bruille-sud-1-q140839469` |
| Coordinates | 50.46781, 3.50641 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.46781/3.50641)) |
| Wikidata | [Q140839469](https://www.wikidata.org/wiki/Q140839469) (CC0) |
| Wikidata class | fort |
| Types | casemate\|Blockhouse STG type S10 |
| Administrative area | Bruille-Saint-Amand |
| Wikipedia language editions | 1 |
| OSM `historic` | bunker |

## What the model contains

Tier **T1**, status `outline+walls`, 83 elements (outline 1, road 7, building 59, zone 10, wall 6).

Evidence: documented 0, mapped 83, inferred 0, derived 0; heights documented 0, inferred 0, unknown 65.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1443739212 historic=bunker Q140839469 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.46781/3.50641) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; casemate\|Blockhouse STG type S10; sitelinks=1; wikidata:Q140839469 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 82 elements); data/traces/bruille-sud-1-q140839469.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 83 elements; outline osm:way/1443739212 historic=bunker Q140839469 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
