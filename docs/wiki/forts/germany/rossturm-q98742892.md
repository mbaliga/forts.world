# Rossturm

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rossturm-q98742892` |
| Coordinates | 49.03298, 11.47342 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.03298/11.47342)) |
| Wikidata | [Q98742892](https://www.wikidata.org/wiki/Q98742892) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Beilngries |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |

## What the model contains

Tier **T1**, status `outline+walls`, 230 elements (outline 1, marker 4, road 87, waterway 1, building 409, wall 16, zone 1).

Evidence: documented 0, mapped 230, inferred 0, derived 0; heights documented 0, inferred 0, unknown 136.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/212722500 historic=citywalls Q98742892 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 409 mapped (trace size budget); the rest of the town is not drawn
- origin moved 1 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.03298/11.47342) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=1; wikidata:Q98742892 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 230 elements); data/traces/rossturm-q98742892.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
