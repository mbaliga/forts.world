# Minsk Castle

> Belarus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `minsk-castle-q3692806` |
| Coordinates | 53.90778, 27.55167 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.90778/27.55167)) |
| Wikidata | [Q3692806](https://www.wikidata.org/wiki/Q3692806) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Minsk |
| Wikipedia language editions | 7 |
| OSM `historic` | archaeological_site |
| OSM `description` | Цяпер рэшткі храма знаходзіцца на глыбіні 0,5—2,1 м. ад дзённай паверхні. У 1967 годзе за 30 м. ад сапраўдных рэштак на дзённай паверхні пабудаваны іх муляж. |

## What the model contains

Tier **T1**, status `outline+walls`, 308 elements (outline 1, marker 22, road 257, building 34, zone 60, retaining-wall 37, wall 3, waterway 1).

Evidence: documented 0, mapped 308, inferred 0, derived 0; heights documented 21, inferred 0, unknown 53.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/490770155 historic=archaeological_site Q3917580 125 m from ledger point
- roads capped: kept the 150 longest of 257 mapped (trace size budget); minor lanes are not drawn
- origin moved 125 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.90778/27.55167) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=7; wikidata:Q3692806 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 308 elements); data/traces/minsk-castle-q3692806.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belarus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
