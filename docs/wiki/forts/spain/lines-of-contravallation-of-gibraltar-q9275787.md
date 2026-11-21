# Lines of Contravallation of Gibraltar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lines-of-contravallation-of-gibraltar-q9275787` |
| Coordinates | 36.16015, -5.34567 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.16015/-5.34567)) |
| Wikidata | [Q9275787](https://www.wikidata.org/wiki/Q9275787) (CC0) |
| Wikidata class | fort |
| Types | fortification\|monument |
| Administrative area | La Línea de la Concepción |
| Inception | 1730 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 219 elements (outline 1, road 55, coastline 2, building 79, wall 59, retaining-wall 4, zone 19).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 0, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/462725331 historic=castle Q97617140 611 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 615 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.16015/-5.34567) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|monument; sitelinks=3; wikidata:Q9275787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 219 elements); data/traces/lines-of-contravallation-of-gibraltar-q9275787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
