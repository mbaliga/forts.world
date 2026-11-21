# Pålsund's Artillery Battery

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palsund-s-artillery-battery-q10647906` |
| Coordinates | 59.39778, 18.32139 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.39778/18.32139)) |
| Wikidata | [Q10647906](https://www.wikidata.org/wiki/Q10647906) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coastal battery\|heritage site in Sweden |
| Administrative area | Vaxholm Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 18 elements (outline 1, zone 2, road 11, coastline 3, water 1).

Evidence: documented 0, mapped 18, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1263218905 historic=fort Q10647906 24 m from ledger point
- origin moved 21 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":177,"medianInside":4,"medianOutside":8.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.39778/18.32139) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coastal battery\|heritage site in Sweden; sitelinks=1; wikidata:Q10647906 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 18 elements); data/traces/palsund-s-artillery-battery-q10647906.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
