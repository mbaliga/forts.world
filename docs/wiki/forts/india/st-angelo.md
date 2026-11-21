# St Angelo's Fort, Kannur

> India · Kerala · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `st-angelo` |
| Coordinates | 11.8538, 75.3718 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/11.8538/75.3718)) |
| Wikidata | [Q2663176](https://www.wikidata.org/wiki/Q2663176) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Kerala |
| Designations | Heritage of Portuguese Influence\|Monument of National Importance |
| Wikipedia language editions | 14 |
| Programme catalogue | confidence high, significance rank 216; sources catalogue:st-angelo;wikidata:Q2663176;smith-newton:r163 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, coastline 1, road 7, waterway 1, building 11, zone 1, water 2).

Evidence: documented 0, mapped 24, inferred 0, derived 2; heights documented 0, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/542192379 historic=fort Q2663176 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1255,"medianInside":2.1,"medianOutside":8.3}
- sea-1: DEM check ok {"cells":393,"medianInside":1.4,"medianOutside":5.2}
- 21 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/11.8538/75.3718) | 2026-11-11 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-11 |

## Research notes

- [docs/research/st-angelo-mapped-perimeter.md](../../../research/st-angelo-mapped-perimeter.md)
- [docs/research/st-angelo-pass.md](../../../research/st-angelo-pass.md)

## Ledger note

src/levels/st-angelo.trace.js (curation tools/trace/curation/st-angelo.mjs), level src/levels/st-angelo.js registered in place of the generated stAngelo in kanara-malabar.js (still exported, unregistered). Eras 1663 (Dutch capture; outline and coast carried back, inferred) and today. No wall, bastion or gate mapped; no source gives a height, area or dimension, so no constructed layer. Conflict: Barbosa/Almeida as 1505 builder. T2 needs: ASI plan or 2015 excavation drawings, a dated plan or the Rijksmuseum painting under open licence, a height source. docs/research/st-angelo-pass.md. Batch alpha-T #3.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
