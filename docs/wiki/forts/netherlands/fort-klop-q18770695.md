# Fort Klop

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-klop-q18770695` |
| Coordinates | 52.11968, 5.08883 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.11968/5.08883)) |
| Wikidata | [Q18770695](https://www.wikidata.org/wiki/Q18770695) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort\|architectural ensemble |
| Administrative area | Utrecht |
| Designations | Rijksmonument complex |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `description` | Onderdeel van de Nieuwe Hollandse Waterlinie (NHW) |
| OSM `website` | http://www.fortaandeklop.nl/ |

## What the model contains

Tier **T1**, status `outline+walls`, 357 elements (outline 1, road 138, water 19, zone 72, waterway 2, building 265, wall 5).

Evidence: documented 0, mapped 357, inferred 0, derived 0; heights documented 20, inferred 0, unknown 105.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/173031267 historic=fort Q18770695 25 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 265 mapped (trace size budget); the rest of the town is not drawn
- origin moved 23 m from the ledger point to the centre of the mapped site
- 32 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.11968/5.08883) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort\|architectural ensemble; sitelinks=3; wikidata:Q18770695 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 357 elements); data/traces/fort-klop-q18770695.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
