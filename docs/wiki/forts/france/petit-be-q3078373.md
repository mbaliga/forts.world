# Petit Bé

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `petit-be-q3078373` |
| Coordinates | 48.6525, -2.03833 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6525/-2.03833)) |
| Wikidata | [Q3078373](https://www.wikidata.org/wiki/Q3078373) (CC0) |
| Wikidata class | fort |
| Types | tidal island\|fort |
| Administrative area | Saint-Malo |
| Designations | classified historical monument |
| Wikipedia language editions | 7 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Conçu à partir de 1689 par l'ingénieur militaire Garangeau, sur les plans de Vauban, le fort est démilitarisé en 1885 et cédé à la commune. |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 6 elements (outline 1, coastline 1, building 2, road 1).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305880286 historic=fort Q3078373 16 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 15 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6525/-2.03833) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tidal island\|fort; sitelinks=7; wikidata:Q3078373 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 6 elements); data/traces/petit-be-q3078373.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
