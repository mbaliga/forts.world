# Linnasaari batteri

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `linnasaari-batteri-q107135144` |
| Coordinates | 60.74351, 28.70342 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.74351/28.70342)) |
| Wikidata | [Q107135144](https://www.wikidata.org/wiki/Q107135144) (CC0) |
| Wikidata class | fort |
| Types | fortification\|historic site |
| Administrative area | Vyborg |
| Inception | 1860 |
| Designations | cultural heritage site in Russia |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 35 elements (outline 1, coastline 3, road 20, building 8, cliff 1, wall 1, waterway 1).

Evidence: documented 0, mapped 35, inferred 0, derived 0; heights documented 1, inferred 0, unknown 8.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/184971541 historic=yes 66 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 63 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.74351/28.70342) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|historic site; sitelinks=1; wikidata:Q107135144 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 35 elements); data/traces/linnasaari-batteri-q107135144.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
