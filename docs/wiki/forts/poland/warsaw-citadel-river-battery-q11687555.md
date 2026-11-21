# Warsaw Citadel: river battery

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `warsaw-citadel-river-battery-q11687555` |
| Coordinates | 52.2722, 20.9944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2722/20.9944)) |
| Wikidata | [Q11687555](https://www.wikidata.org/wiki/Q11687555) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Warsaw |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | http://nowyfort.pl |

## What the model contains

Tier **T1**, status `outline+walls`, 393 elements (outline 1, marker 10, road 271, waterway 1, building 118, zone 106, wall 7).

Evidence: documented 0, mapped 393, inferred 0, derived 0; heights documented 120, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/404091961 historic=fort Q9261649 535 m from ledger point
- roads capped: kept the 150 longest of 271 mapped (trace size budget); minor lanes are not drawn
- origin moved 535 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2722/20.9944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q11687555 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 393 elements); data/traces/warsaw-citadel-river-battery-q11687555.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
