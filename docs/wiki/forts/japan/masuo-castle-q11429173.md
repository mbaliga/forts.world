# Masuo Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `masuo-castle-q11429173` |
| Coordinates | 35.84039, 139.98436 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.84039/139.98436)) |
| Wikidata | [Q11429173](https://www.wikidata.org/wiki/Q11429173) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 219 elements (outline 1, road 87, building 480, waterway 1, zone 10).

Evidence: documented 0, mapped 219, inferred 0, derived 0; heights documented 109, inferred 0, unknown 11.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/471831848 historic=archaeological_site 184 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 480 mapped (trace size budget); the rest of the town is not drawn
- origin moved 188 m from the ledger point to the centre of the mapped site
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.84039/139.98436) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11429173 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 219 elements); data/traces/masuo-castle-q11429173.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
