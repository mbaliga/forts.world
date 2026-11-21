# Fort William

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-william-q56666626` |
| Coordinates | 56.82136, -5.10773 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/56.82136/-5.10773)) |
| Wikidata | [Q56666626](https://www.wikidata.org/wiki/Q56666626) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 177 elements (outline 1, marker 3, road 141, building 22, wall 4, zone 2, retaining-wall 2, coastline 1, water 1).

Evidence: documented 0, mapped 177, inferred 0, derived 1; heights documented 1, inferred 0, unknown 27.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39363945 historic=fort Q56666626 12 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":164,"medianInside":0.4,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/56.82136/-5.10773) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=1; wikidata:Q56666626 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 177 elements); data/traces/fort-william-q56666626.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
