# San Felipe Fortress

> Mexico · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-felipe-fortress-q16569808` |
| Coordinates | 18.67694, -88.39528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.67694/-88.39528)) |
| Wikidata | [Q16569808](https://www.wikidata.org/wiki/Q16569808) (CC0) |
| Wikidata class | fort |
| Types | museum\|fortification\|presidio\|monument |
| Administrative area | Bacalar |
| Inception | 1733 |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |

## What the model contains

Tier **T1**, status `outline-only`, 33 elements (outline 1, marker 1, road 28, zone 1, building 2).

Evidence: documented 0, mapped 33, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/505302607 historic=castle 710 m from ledger point
- origin moved 711 m from the ledger point to the outline centroid
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.67694/-88.39528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|fortification\|presidio\|monument; sitelinks=2; wikidata:Q16569808 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 33 elements); data/traces/san-felipe-fortress-q16569808.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/mexico.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
