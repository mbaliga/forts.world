# Fort Colcura

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-colcura-q5470952` |
| Coordinates | -37.10628, -73.16075 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-37.10628/-73.16075)) |
| Wikidata | [Q5470952](https://www.wikidata.org/wiki/Q5470952) (CC0) |
| Wikidata class | fort |
| Types | fort\|cultural property |
| Administrative area | Lota |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, marker 4, coastline 1, road 15, zone 2, building 3, water 2).

Evidence: documented 0, mapped 28, inferred 0, derived 2; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/203616771 historic=fort Q5470952 10 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":36,"medianInside":8.1,"medianOutside":25.6}
- sea-1: DEM check ok {"cells":70,"medianInside":6.5,"medianOutside":28.2}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-37.10628/-73.16075) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|cultural property; sitelinks=3; wikidata:Q5470952 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/fort-colcura-q5470952.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
