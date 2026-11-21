# Château d'If

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-if-q622500` |
| Coordinates | 43.27986, 5.32514 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.27986/5.32514)) |
| Wikidata | [Q622500](https://www.wikidata.org/wiki/Q622500) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Frioul Islands |
| Inception | 1527 |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 41 |
| OSM `historic` | yes |
| OSM `heritage` | 3 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 90 elements (outline 1, building 10, road 25, retaining-wall 10, wall 41, coastline 2, water 1).

Evidence: documented 0, mapped 90, inferred 0, derived 1; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28392529 historic=yes Q1977819 668 m from ledger point
- origin moved 667 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":23,"medianInside":0,"medianOutside":2.5}
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.27986/5.32514) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=41; wikidata:Q622500 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 90 elements); data/traces/chateau-d-if-q622500.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
