# Vestingwerken Willemstad

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `vestingwerken-willemstad-q1941927` |
| Coordinates | 51.69252, 4.43835 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.69252/4.43835)) |
| Wikidata | [Q1941927](https://www.wikidata.org/wiki/Q1941927) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|fortification\|stronghold |
| Administrative area | Moerdijk |
| Inception | 1584 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, marker 7, water 24, zone 59, road 320, waterway 7, building 771, wall 2).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 0, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/957698058 historic=castle Q1941927 62 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 771 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 320 mapped (trace size budget); minor lanes are not drawn
- origin moved 61 m from the ledger point to the centre of the mapped site
- 291 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.69252/4.43835) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|fortification\|stronghold; sitelinks=2; wikidata:Q1941927 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/vestingwerken-willemstad-q1941927.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
