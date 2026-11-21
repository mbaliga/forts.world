# Fort de la Conchée

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-conchee-q3207707` |
| Coordinates | 48.6836, -2.04417 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.6836/-2.04417)) |
| Wikidata | [Q3207707](https://www.wikidata.org/wiki/Q3207707) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Malo |
| Designations | classified historical monument |
| Wikipedia language editions | 5 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Conçu à partir de 1689 par l'ingénieur militaire Garangeau, sur les plans de Vauban, le fort est démilitarisé en 1901 et cédé à la commune. En 1989, la Compagnie du Fort de la Conchée en fait l'acquisition dans l'intention de le restaurer. |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 4 elements (outline 1, coastline 1, building 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/305880282 historic=fort Q3207707 15 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 14 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.6836/-2.04417) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=5; wikidata:Q3207707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 4 elements); data/traces/fort-de-la-conchee-q3207707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
