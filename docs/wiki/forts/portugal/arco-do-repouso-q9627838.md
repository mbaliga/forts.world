# Arco do Repouso

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `arco-do-repouso-q9627838` |
| Coordinates | 37.01333, -7.93306 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.01333/-7.93306)) |
| Wikidata | [Q9627838](https://www.wikidata.org/wiki/Q9627838) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Faro |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 7, road 153, building 169, wall 14, zone 1, coastline 1, waterway 2, water 1).

Evidence: documented 0, mapped 297, inferred 0, derived 1; heights documented 4, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6669629 historic=city_gate Q9627838 13 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 169 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 153 mapped (trace size budget); minor lanes are not drawn
- origin moved 13 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":3,"medianInside":4.6,"medianOutside":9.6}
- 10 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.01333/-7.93306) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q9627838 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 356 elements); data/traces/arco-do-repouso-q9627838.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 297 elements; outline osm:relation/6669629 historic=city_gate Q9627838 13 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
