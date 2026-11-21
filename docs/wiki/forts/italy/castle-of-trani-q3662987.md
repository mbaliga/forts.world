# Castle of Trani

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-trani-q3662987` |
| Coordinates | 41.28189, 16.41555 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.28189/16.41555)) |
| Wikidata | [Q3662987](https://www.wikidata.org/wiki/Q3662987) (CC0) |
| Wikidata class | castle |
| Types | castle\|Italian national museum\|Category:Hohenstaufen castles in Southern Italy\|historical park museum\|military museum building\|Museum of the Italian Ministry of Culture |
| Administrative area | Trani |
| Inception | 1233 |
| Designations | Italian national heritage |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | no |
| OSM `website` | https://www.beniculturali.it/mibac/opencms/MiBAC/sito-MiBAC/Luogo/MibacUnif/Luoghi-della-Cultura/visualizza_asset.html?id=150134&pagename=157031 |

## What the model contains

Tier **T1**, status `outline+walls`, 133 elements (outline 1, road 66, coastline 1, building 51, zone 1, wall 9, retaining-wall 3, water 1).

Evidence: documented 0, mapped 133, inferred 0, derived 1; heights documented 1, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6106077 historic=castle Q3662987 28 m from ledger point
- origin moved 31 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":205,"medianInside":0,"medianOutside":10.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.28189/16.41555) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|Italian national museum\|Category:Hohenstaufen castles in Southern Italy\|historical park museum\|military museum building\|Museum of the Italian Ministry of Culture; sitelinks=6; wikidata:Q3662987 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 133 elements); data/traces/castle-of-trani-q3662987.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
