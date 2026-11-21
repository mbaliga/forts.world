# Château à l’Étoc

> Guernsey · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-a-l-etoc-q54141950` |
| Coordinates | 49.73187, -2.1774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.73187/-2.1774)) |
| Wikidata | [Q54141950](https://www.wikidata.org/wiki/Q54141950) (CC0) |
| Wikidata class | castle |
| Types | castle\|ruins |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, coastline 8, road 6, building 13, wall 3, zone 1, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/441900979 historic=castle Q54141950 9 m from ledger point
- island ring (404 m2) cut out of sea-0
- island ring (516 m2) cut out of sea-0
- island ring (890 m2) cut out of sea-0
- origin moved 10 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":370,"medianInside":0,"medianOutside":0.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.73187/-2.1774) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|ruins; sitelinks=1; wikidata:Q54141950 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/chateau-a-l-etoc-q54141950.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/guernsey.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
