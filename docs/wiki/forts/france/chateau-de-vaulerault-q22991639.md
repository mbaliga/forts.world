# Château de Vaulérault

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-vaulerault-q22991639` |
| Coordinates | 48.65459, -1.86859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.65459/-1.86859)) |
| Wikidata | [Q22991639](https://www.wikidata.org/wiki/Q22991639) (CC0) |
| Wikidata class | castle |
| Types | castle\|château\|malouinière |
| Administrative area | Saint-Méloir-des-Ondes |
| Inception | 1701 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, marker 1, coastline 1, road 14, building 65, zone 11, wall 1, water 1).

Evidence: documented 0, mapped 95, inferred 0, derived 1; heights documented 0, inferred 0, unknown 66.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/95168905 historic=castle Q22991639 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":25,"medianInside":0,"medianOutside":28.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.65459/-1.86859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château\|malouinière; sitelinks=2; wikidata:Q22991639 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/chateau-de-vaulerault-q22991639.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
