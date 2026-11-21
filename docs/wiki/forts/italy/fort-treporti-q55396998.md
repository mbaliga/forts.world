# Fort Treporti

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-treporti-q55396998` |
| Coordinates | 45.45532, 12.4381 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.45532/12.4381)) |
| Wikidata | [Q55396998](https://www.wikidata.org/wiki/Q55396998) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cavallino-Treporti |
| Inception | 1842 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `website` | https://www.fortificazioni.net/forti/TREPORTI.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 72 elements (outline 1, road 18, building 37, waterway 9, water 6, wall 1).

Evidence: documented 0, mapped 72, inferred 0, derived 0; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/116725188 historic=fort Q55396998 27 m from ledger point
- origin moved 26 m from the ledger point to the centre of the mapped site
- 27 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.45532/12.4381) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q55396998 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 72 elements); data/traces/fort-treporti-q55396998.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
