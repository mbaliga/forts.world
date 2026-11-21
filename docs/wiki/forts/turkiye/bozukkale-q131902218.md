# Bozukkale

> Türkiye · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bozukkale-q131902218` |
| Coordinates | 36.56594, 28.01574 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.56594/28.01574)) |
| Wikidata | [Q131902218](https://www.wikidata.org/wiki/Q131902218) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Marmaris |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, coastline 2, building 4, road 4, zone 2, water 1).

Evidence: documented 0, mapped 15, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87727115 historic=ruins 39 m from ledger point
- origin moved 36 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":582,"medianInside":0,"medianOutside":13.5}
- 18 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.56594/28.01574) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q131902218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 15 elements); data/traces/bozukkale-q131902218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/turkiye.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
