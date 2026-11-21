# Forte Tre Natali

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-tre-natali-q3748653` |
| Coordinates | 42.43778, 11.13056 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.43778/11.13056)) |
| Wikidata | [Q3748653](https://www.wikidata.org/wiki/Q3748653) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Porto Santo Stefano |
| Inception | 1811 |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 85 elements (outline 1, road 9, coastline 1, building 67, waterway 5, zone 1, water 1).

Evidence: documented 0, mapped 85, inferred 0, derived 1; heights documented 65, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/716789560 historic=ruins Q3995402 523 m from ledger point
- origin moved 522 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":209,"medianInside":0,"medianOutside":11.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.43778/11.13056) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3748653 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 85 elements); data/traces/forte-tre-natali-q3748653.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
