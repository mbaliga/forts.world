# Pyrgos Tzanetaki

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pyrgos-tzanetaki-q56398375` |
| Coordinates | 36.75415, 22.57314 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.75415/22.57314)) |
| Wikidata | [Q56398375](https://www.wikidata.org/wiki/Q56398375) (CC0) |
| Wikidata class | castle |
| Types | castle\|towerhouse\|tower |
| Administrative area | East Mani municipality |
| Inception | 1829 |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |

## What the model contains

Tier **T1**, status `outline+walls`, 30 elements (outline 1, road 7, coastline 3, building 3, wall 5, zone 9, water 2).

Evidence: documented 0, mapped 30, inferred 0, derived 2; heights documented 0, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/360162675 historic=castle Q56398375 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":112,"medianInside":0,"medianOutside":0}
- sea-1: DEM check failed {"cells":169,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.75415/22.57314) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|towerhouse\|tower; sitelinks=1; wikidata:Q56398375 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 30 elements); data/traces/pyrgos-tzanetaki-q56398375.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
