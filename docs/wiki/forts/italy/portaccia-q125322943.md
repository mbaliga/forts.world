# Portaccia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `portaccia-q125322943` |
| Coordinates | 42.76506, 10.8817 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.76506/10.8817)) |
| Wikidata | [Q125322943](https://www.wikidata.org/wiki/Q125322943) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, road 157, waterway 4, water 2, wall 35, building 110, zone 3, retaining-wall 6).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 20, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/59807698 historic=yes Q125322943 1 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.76506/10.8817) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q125322943 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/portaccia-q125322943.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
