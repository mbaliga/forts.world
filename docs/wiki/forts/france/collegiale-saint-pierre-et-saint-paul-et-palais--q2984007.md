# Collégiale Saint-Pierre-et-Saint-Paul et Palais Delphinal de Saint Donat

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `collegiale-saint-pierre-et-saint-paul-et-palais--q2984007` |
| Coordinates | 45.12259, 4.98247 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.12259/4.98247)) |
| Wikidata | [Q2984007](https://www.wikidata.org/wiki/Q2984007) (CC0) |
| Wikidata class | castle |
| Types | castle\|institutional complex |
| Administrative area | Saint-Donat-sur-l'Herbasse |
| Inception | X°- X |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 287 elements (outline 1, marker 3, road 133, waterway 2, zone 1, building 640, water 1, wall 25, retaining-wall 1).

Evidence: documented 0, mapped 287, inferred 0, derived 0; heights documented 0, inferred 0, unknown 146.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1466583948 historic=castle Q2984007 1 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 640 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.12259/4.98247) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|institutional complex; sitelinks=2; wikidata:Q2984007 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 287 elements); data/traces/collegiale-saint-pierre-et-saint-paul-et-palais--q2984007.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
