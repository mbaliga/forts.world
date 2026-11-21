# San Juan Gate (Puerto Rico)

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-juan-gate-puerto-rico-q66660890` |
| Coordinates | 18.46328, -66.11906 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.46328/-66.11906)) |
| Wikidata | [Q66660890](https://www.wikidata.org/wiki/Q66660890) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Puerto Rico |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 62 elements (outline 1, road 28, building 12, wall 2, coastline 2, water 2, zone 15).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 10, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1024680663 historic=fort 453 m from ledger point
- origin moved 457 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":227,"medianInside":0.4,"medianOutside":23.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.46328/-66.11906) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q66660890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 62 elements); data/traces/san-juan-gate-puerto-rico-q66660890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
