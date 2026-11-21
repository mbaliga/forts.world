# Wasserburg Lengefeld

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserburg-lengefeld-q1709698` |
| Coordinates | 51.2678, 8.83069 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.2678/8.83069)) |
| Wikidata | [Q1709698](https://www.wikidata.org/wiki/Q1709698) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Korbach |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |

## What the model contains

Tier **T1**, status `outline+walls`, 153 elements (outline 1, marker 2, road 39, zone 12, building 95, water 1, wall 2, retaining-wall 1).

Evidence: documented 0, mapped 153, inferred 0, derived 0; heights documented 1, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39749277 historic=manor Q1709698 27 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.2678/8.83069) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q1709698 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 154 elements); data/traces/wasserburg-lengefeld-q1709698.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 153 elements; outline osm:way/39749277 historic=manor Q1709698 27 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
