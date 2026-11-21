# City walls of Lipník nad Bečvou

> Czechia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-lipnik-nad-becvou-q37461735` |
| Coordinates | 49.52632, 17.58775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.52632/17.58775)) |
| Wikidata | [Q37461735](https://www.wikidata.org/wiki/Q37461735) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Lipník nad Bečvou I-Město |
| Designations | cultural monument of the Czech Republic |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 5, road 438, waterway 3, building 190, zone 131, wall 45, retaining-wall 10).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 27, inferred 0, unknown 74.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165438256 historic=castle Q26868376 511 m from ledger point
- pruned to the outline plus 150 m: 823 -> 564 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 133 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 287 mapped (trace size budget); minor lanes are not drawn
- origin moved 512 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.52632/17.58775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q37461735 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/city-walls-of-lipnik-nad-becvou-q37461735.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/czechia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
