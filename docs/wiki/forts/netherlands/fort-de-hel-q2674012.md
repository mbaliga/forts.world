# Fort de Hel

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-hel-q2674012` |
| Coordinates | 51.68111, 4.42338 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.68111/4.42338)) |
| Wikidata | [Q2674012](https://www.wikidata.org/wiki/Q2674012) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Administrative area | Moerdijk |
| Inception | 1811; |
| Designations | Rijksmonument |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |
| OSM `website` | https://www.fortdehelvanhelwijk.nl/ |

## What the model contains

Tier **T1**, status `outline-only`, 76 elements (outline 1, marker 2, road 23, building 22, zone 15, water 2, waterway 11).

Evidence: documented 0, mapped 76, inferred 0, derived 0; heights documented 0, inferred 0, unknown 22.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/516828957 historic=fort Q2674012 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 403 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.68111/4.42338) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=2; wikidata:Q2674012 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 76 elements); data/traces/fort-de-hel-q2674012.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
