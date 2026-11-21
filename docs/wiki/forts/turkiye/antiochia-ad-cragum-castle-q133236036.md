# Antiochia ad Cragum Castle

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `antiochia-ad-cragum-castle-q133236036` |
| Coordinates | 36.15692, 32.4149 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.15692/32.4149)) |
| Wikidata | [Q133236036](https://www.wikidata.org/wiki/Q133236036) (CC0) |
| Wikidata class | fort |
| Types | fortress\|archaeological site\|ancient city |
| Administrative area | Gazipaşa |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | retaining_wall |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, coastline 1, road 9, building 2, retaining-wall 2, zone 4, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/636957820 historic=ruins 41 m from ledger point
- origin moved 41 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":165,"medianInside":0,"medianOutside":31.1}
- 40 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.15692/32.4149) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|archaeological site\|ancient city; sitelinks=1; wikidata:Q133236036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 20 elements); data/traces/antiochia-ad-cragum-castle-q133236036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
