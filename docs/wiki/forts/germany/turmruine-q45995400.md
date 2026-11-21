# Turmruine

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `turmruine-q45995400` |
| Coordinates | 53.16753, 8.62886 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.16753/8.62886)) |
| Wikidata | [Q45995400](https://www.wikidata.org/wiki/Q45995400) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower\|built structure |
| Administrative area | Vegesack |
| Designations | protected cultural heritage monument in Bremen (state) |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `heritage` | 4 |
| OSM `description` | Kulturdenkmal, siehe http://wiki.openstreetmap.org/wiki/Bremen/Kulturdenkm%C3%A4ler |
| OSM `ruins` | tower |
| OSM `website` | https://www.denkmalpflege.bremen.de/sixcms/detail.php?template=20_denkmal_wrapper_d&obj=00001984 |

## What the model contains

Tier **T1**, status `outline-only`, 197 elements (outline 1, marker 1, road 110, building 65, waterway 4, water 6, coastline 3, retaining-wall 3, zone 4).

Evidence: documented 0, mapped 197, inferred 0, derived 5; heights documented 6, inferred 0, unknown 62.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/172221563 historic=ruins Q45995400 0 m from ledger point
- sea-0: DEM check ok {"cells":397,"medianInside":7.3,"medianOutside":13.4}
- sea-1: DEM check ok {"cells":21,"medianInside":3.5,"medianOutside":8.2}
- sea-2: DEM check ok {"cells":400,"medianInside":7.3,"medianOutside":13.6}
- sea-3: DEM check ok {"cells":2,"medianInside":1.4,"medianOutside":7.6}
- sea-4: DEM check ok {"cells":23,"medianInside":-1.8,"medianOutside":8.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.16753/8.62886) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower\|built structure; sitelinks=1; wikidata:Q45995400 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 197 elements); data/traces/turmruine-q45995400.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
