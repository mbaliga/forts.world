# Marinekazerne Erfprins

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `marinekazerne-erfprins-q17440872` |
| Coordinates | 52.95913, 4.73683 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.95913/4.73683)) |
| Wikidata | [Q17440872](https://www.wikidata.org/wiki/Q17440872) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Den Helder |
| Inception | 1813 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.forterfprins.nl |

## What the model contains

Tier **T1**, status `outline-only`, 373 elements (outline 1, marker 2, road 146, building 339, zone 69, water 26, coastline 1, waterway 6, retaining-wall 2).

Evidence: documented 0, mapped 373, inferred 0, derived 1; heights documented 8, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/958991104 historic=fort Q17440872 133 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 339 mapped (trace size budget); the rest of the town is not drawn
- origin moved 130 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":60,"medianInside":-1,"medianOutside":0.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.95913/4.73683) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=2; wikidata:Q17440872 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 373 elements); data/traces/marinekazerne-erfprins-q17440872.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
