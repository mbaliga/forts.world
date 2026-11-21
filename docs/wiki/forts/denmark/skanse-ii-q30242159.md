# Skanse II

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `skanse-ii-q30242159` |
| Coordinates | 55.58596, 9.78134 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.58596/9.78134)) |
| Wikidata | [Q30242159](https://www.wikidata.org/wiki/Q30242159) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|sconce\|ancient monument |
| Administrative area | Fredericia Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline-only`, 23 elements (outline 1, zone 2, road 8, coastline 1, building 11).

Evidence: documented 0, mapped 23, inferred 0, derived 0; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/488804730 historic=archaeological_site Q30242159 13 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.58596/9.78134) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|sconce\|ancient monument; sitelinks=0; wikidata:Q30242159 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 23 elements); data/traces/skanse-ii-q30242159.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
