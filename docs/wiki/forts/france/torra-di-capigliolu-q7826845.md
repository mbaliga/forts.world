# Torra di Capigliolu

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-capigliolu-q7826845` |
| Coordinates | 42.06545, 8.72287 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.06545/8.72287)) |
| Wikidata | [Q7826845](https://www.wikidata.org/wiki/Q7826845) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|Genoese towers in Corsica |
| Administrative area | Casaglione |
| Inception | 1581 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 5 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | Fortin de la Tour génoise de Capigliolo |
| OSM `website` | https://www.visit-corsica.com/fre/Mon-sejour/Itineraires/Tous-les-itineraires/MAISON-EN-RUINE-FORTIFIEE-ET-TOUR-DE-CAPIGLIOLU |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 1, road 5, building 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/396617480 historic=castle 187 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 187 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.06545/8.72287) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|Genoese towers in Corsica; sitelinks=5; wikidata:Q7826845 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/torra-di-capigliolu-q7826845.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
