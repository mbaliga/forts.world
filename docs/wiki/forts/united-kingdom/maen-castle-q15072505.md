# Maen Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maen-castle-q15072505` |
| Coordinates | 50.07273, -5.70834 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.07273/-5.70834)) |
| Wikidata | [Q15072505](https://www.wikidata.org/wiki/Q15072505) (CC0) |
| Wikidata class | fort |
| Types | promontory fort |
| Administrative area | Sennen |
| Designations | scheduled monument |
| Wikipedia language editions | 4 |
| OSM `historic` | building |
| OSM `website` | https://www.nationaltrust.org.uk/visit/cornwall/coast-beaches/discover-mayon-cliff#rt-the-coastguard-lookout |

## What the model contains

Tier **T1**, status `outline+walls`, 76 elements (outline 1, coastline 3, road 25, zone 16, cliff 19, building 7, wall 4, water 1).

Evidence: documented 0, mapped 76, inferred 0, derived 1; heights documented 1, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241170105 historic=building 434 m from ledger point
- origin moved 434 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":190,"medianInside":-2.6,"medianOutside":42.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.07273/-5.70834) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; promontory fort; sitelinks=4; wikidata:Q15072505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 76 elements); data/traces/maen-castle-q15072505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
