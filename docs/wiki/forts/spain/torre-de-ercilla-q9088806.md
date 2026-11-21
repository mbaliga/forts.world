# Torre de Ercilla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-ercilla-q9088806` |
| Coordinates | 43.42035, -2.72099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.42035/-2.72099)) |
| Wikidata | [Q9088806](https://www.wikidata.org/wiki/Q9088806) (CC0) |
| Wikidata class | fortification |
| Types | tower\|tower house\|monument |
| Administrative area | Bermeo |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline+walls`, 314 elements (outline 1, marker 2, road 210, coastline 1, building 432, zone 12, waterway 1, wall 26, water 1).

Evidence: documented 0, mapped 314, inferred 0, derived 1; heights documented 4, inferred 0, unknown 142.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/658608221 historic=monument 187 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 432 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 187 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1,"medianInside":9.3,"medianOutside":32.5}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.42035/-2.72099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|tower house\|monument; sitelinks=3; wikidata:Q9088806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 314 elements); data/traces/torre-de-ercilla-q9088806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
