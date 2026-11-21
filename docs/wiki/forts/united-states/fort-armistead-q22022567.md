# Fort Armistead

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-armistead-q22022567` |
| Coordinates | 39.20889, -76.53389 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.20889/-76.53389)) |
| Wikidata | [Q22022567](https://www.wikidata.org/wiki/Q22022567) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Hawkins Point |
| Inception | 1897 |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 45 elements (outline 1, marker 1, road 14, water 2, building 22, coastline 4, zone 1).

Evidence: documented 0, mapped 45, inferred 0, derived 1; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/336166667 historic=fort Q22022567 30 m from ledger point
- origin moved 29 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":153,"medianInside":0.2,"medianOutside":5.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.20889/-76.53389) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q22022567 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 45 elements); data/traces/fort-armistead-q22022567.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
