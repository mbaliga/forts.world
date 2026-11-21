# Minat al-Qal'a

> Israel · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `minat-al-qal-a-q123852542` |
| Coordinates | 31.78028, 34.62222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.78028/34.62222)) |
| Wikidata | [Q123852542](https://www.wikidata.org/wiki/Q123852542) (CC0) |
| Wikidata class | ruin |
| Types | castle ruin |
| Administrative area | Ashdod |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |
| OSM `website` | https://www.tiuli.com/points-of-interest/677/פארק-אקולוגי-מצודת-ים-אשדוד |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, marker 1, road 41, coastline 1, water 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/238402362 historic=ruins Q123852542 56 m from ledger point
- origin moved 52 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":478,"medianInside":4.8,"medianOutside":9.1}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.78028/34.62222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; castle ruin; sitelinks=7; wikidata:Q123852542 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/minat-al-qal-a-q123852542.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/israel.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
