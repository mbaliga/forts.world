# Manoir de la Salle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-la-salle-q2338895` |
| Coordinates | 45.00986, 1.09003 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.00986/1.09003)) |
| Wikidata | [Q2338895](https://www.wikidata.org/wiki/Q2338895) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor house |
| Administrative area | Saint-Léon-sur-Vézère |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 215 elements (outline 1, marker 3, road 66, zone 3, waterway 1, water 2, building 125, wall 14).

Evidence: documented 0, mapped 215, inferred 0, derived 0; heights documented 25, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167060885 historic=castle Q2338895 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.00986/1.09003) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor house; sitelinks=3; wikidata:Q2338895 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 215 elements); data/traces/manoir-de-la-salle-q2338895.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
