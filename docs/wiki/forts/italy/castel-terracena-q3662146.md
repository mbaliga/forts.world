# Castel Terracena

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castel-terracena-q3662146` |
| Coordinates | 40.67857, 14.76175 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.67857/14.76175)) |
| Wikidata | [Q3662146](https://www.wikidata.org/wiki/Q3662146) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace |
| Administrative area | Salerno |
| Inception | 1076 |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 364 elements (outline 1, road 190, building 157, coastline 1, retaining-wall 5, zone 7, wall 1, water 2).

Evidence: documented 0, mapped 364, inferred 0, derived 1; heights documented 2, inferred 0, unknown 161.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/103494312 historic=castle Q3890672 168 m from ledger point
- origin moved 167 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":28,"medianInside":0,"medianOutside":20.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.67857/14.76175) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace; sitelinks=3; wikidata:Q3662146 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 364 elements); data/traces/castel-terracena-q3662146.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
