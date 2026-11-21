# Pacifique-Duplessis Gate

> Canada · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pacifique-duplessis-gate-q120968207` |
| Coordinates | 46.34488, -72.55502 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.34488/-72.55502)) |
| Wikidata | [Q120968207](https://www.wikidata.org/wiki/Q120968207) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Trois-Rivières |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 202 elements (outline 1, road 185, building 9, zone 1, wall 3, retaining-wall 3).

Evidence: documented 0, mapped 202, inferred 0, derived 0; heights documented 1, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1008629076 historic=city_gate Q120968207 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.34488/-72.55502) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q120968207 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 204 elements); data/traces/pacifique-duplessis-gate-q120968207.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 202 elements; outline osm:way/1008629076 historic=city_gate Q120968207 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/canada.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
