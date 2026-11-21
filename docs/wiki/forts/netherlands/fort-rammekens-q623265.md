# Fort Rammekens

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-rammekens-q623265` |
| Coordinates | 51.45266, 3.65416 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.45266/3.65416)) |
| Wikidata | [Q623265](https://www.wikidata.org/wiki/Q623265) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Vlissingen |
| Inception | 1547 |
| Designations | Rijksmonument |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `description` | Belangrijk gebastionneerd fort, op last van de landvoogdes Maria van Hongarije gebouwd in 1547 door de vestingbouwkundige Donato de Boni en Peter Fransz, ter bescherming van de toegang tot de haven van Middelburg, die hier langs liep. |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, marker 1, road 22, water 6, zone 16, building 2, coastline 1).

Evidence: documented 0, mapped 49, inferred 0, derived 3; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/276003916 historic=fort Q623265 9 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":64,"medianInside":-3,"medianOutside":2.2}
- sea-1: DEM check ok {"cells":10,"medianInside":-3,"medianOutside":2}
- sea-2: DEM check ok {"cells":3,"medianInside":-3,"medianOutside":2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.45266/3.65416) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=6; wikidata:Q623265 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 49 elements); data/traces/fort-rammekens-q623265.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
