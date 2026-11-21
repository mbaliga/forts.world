# Cinta muraria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `cinta-muraria-q113551118` |
| Coordinates | 40.99623, 17.21831 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.99623/17.21831)) |
| Wikidata | [Q113551118](https://www.wikidata.org/wiki/Q113551118) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Polignano a Mare |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 132 elements (outline 1, road 51, water 3, building 37, wall 28, waterway 1, coastline 2, zone 6, retaining-wall 3).

Evidence: documented 0, mapped 132, inferred 0, derived 1; heights documented 5, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/351446845 historic=ruins 522 m from ledger point
- origin moved 522 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":194,"medianInside":0,"medianOutside":5.9}
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.99623/17.21831) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q113551118 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 132 elements); data/traces/cinta-muraria-q113551118.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
