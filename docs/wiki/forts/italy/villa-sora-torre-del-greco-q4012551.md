# Villa Sora (Torre del Greco)

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `villa-sora-torre-del-greco-q4012551` |
| Coordinates | 40.77824, 14.37546 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.77824/14.37546)) |
| Wikidata | [Q4012551](https://www.wikidata.org/wiki/Q4012551) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|archaeological site\|Roman villa |
| Administrative area | Torre del Greco |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 9 elements (outline 1, marker 1, coastline 1, zone 2, road 2, water 2).

Evidence: documented 0, mapped 9, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/262446605 historic=archaeological_site Q4012551 97 m from ledger point
- origin moved 96 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":116,"medianInside":0,"medianOutside":17.6}
- sea-1: DEM check ok {"cells":1,"medianInside":0.3,"medianOutside":13.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.77824/14.37546) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|archaeological site\|Roman villa; sitelinks=3; wikidata:Q4012551 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 9 elements); data/traces/villa-sora-torre-del-greco-q4012551.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
