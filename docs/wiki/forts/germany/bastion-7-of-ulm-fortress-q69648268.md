# Bastion 7 of Ulm Fortress

> Germany · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastion-7-of-ulm-fortress-q69648268` |
| Coordinates | 48.38827, 9.99437 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.38827/9.99437)) |
| Wikidata | [Q69648268](https://www.wikidata.org/wiki/Q69648268) (CC0) |
| Wikidata class | fort |
| Types | bastion\|defence work |
| Administrative area | Neu-Ulm |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://www.festung-ulm.de/ |

## What the model contains

Tier **T1**, status `location-only`, 318 elements (marker 2, road 698, water 3, waterway 5, building 451, zone 9, wall 29).

Evidence: documented 0, mapped 318, inferred 0, derived 0; heights documented 10, inferred 0, unknown 139.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9584658 historic=castle Q50709 1825 m from ledger point
- site is a site relation of 62 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (4860 x 5351 m)
- present-day buildings capped: kept the 120 nearest the outline centre of 451 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 698 mapped (trace size budget); minor lanes are not drawn
- 6279 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.38827/9.99437) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; bastion\|defence work; sitelinks=1; wikidata:Q69648268 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 318 elements); data/traces/bastion-7-of-ulm-fortress-q69648268.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
