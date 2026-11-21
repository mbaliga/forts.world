# Logis du gouverneur

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `logis-du-gouverneur-q3258034` |
| Coordinates | 45.74456, -0.63626 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.74456/-0.63626)) |
| Wikidata | [Q3258034](https://www.wikidata.org/wiki/Q3258034) (CC0) |
| Wikidata class | castle |
| Types | castle\|seigniorial home |
| Administrative area | Saintes |
| Inception | 1609 |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 3 |
| OSM `website` | https://www.ville-saintes.fr/decouvrir-sortir/culture/musees/ |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 3, waterway 2, road 100, building 359, zone 30, cliff 1, wall 7, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 0; heights documented 0, inferred 0, unknown 127.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/136636772 historic=building Q3329132 231 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 359 mapped (trace size budget); the rest of the town is not drawn
- origin moved 231 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.74456/-0.63626) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|seigniorial home; sitelinks=2; wikidata:Q3258034 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/logis-du-gouverneur-q3258034.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
