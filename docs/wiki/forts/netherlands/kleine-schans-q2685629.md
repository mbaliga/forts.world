# Kleine Schans

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kleine-schans-q2685629` |
| Coordinates | 51.64417, 4.74534 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.64417/4.74534)) |
| Wikidata | [Q2685629](https://www.wikidata.org/wiki/Q2685629) (CC0) |
| Wikidata class | fort |
| Types | fort\|yes\|bastion\|sconce |
| Administrative area | Drimmelen |
| Inception | 1624 |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 243 elements (outline 1, marker 1, road 92, zone 21, water 3, waterway 4, building 553, retaining-wall 1).

Evidence: documented 0, mapped 243, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1006154334 historic=fort Q2685629 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 553 mapped (trace size budget); the rest of the town is not drawn
- origin moved 33 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.64417/4.74534) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|yes\|bastion\|sconce; sitelinks=2; wikidata:Q2685629 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 243 elements); data/traces/kleine-schans-q2685629.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
