# South Howe, broch, Westside, Rousay

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `south-howe-broch-westside-rousay-q56668218` |
| Coordinates | 59.15551, -3.09849 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.15551/-3.09849)) |
| Wikidata | [Q56668218](https://www.wikidata.org/wiki/Q56668218) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 33 elements (outline 1, marker 4, coastline 1, road 8, zone 1, wall 13, building 4, water 1).

Evidence: documented 0, mapped 33, inferred 0, derived 1; heights documented 0, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385610785 historic=archaeological_site Q56668218 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":167,"medianInside":31,"medianOutside":16.1}
- 11 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.15551/-3.09849) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56668218 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 33 elements); data/traces/south-howe-broch-westside-rousay-q56668218.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
