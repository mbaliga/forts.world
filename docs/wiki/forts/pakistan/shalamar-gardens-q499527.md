# Shalamar Gardens

> Pakistan · Lahore · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `shalamar-gardens-q499527` |
| Coordinates | 31.585833, 74.381944 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.585833/74.381944)) |
| Wikidata | [Q499527](https://www.wikidata.org/wiki/Q499527) (CC0) |
| Programme catalogue | confidence high, significance rank 54; sources wikidata:Q499527;unesco:171 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, road 279, building 65, water 13, zone 21, wall 6).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 0, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/232344024 historic=(none; chosen by its Wikidata id) Q499527 102 m from ledger point
- origin moved 98 m from the ledger point to the centre of the mapped site
- 22 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.585833/74.381944) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

type=fort; confidence=high; rank=54; sources=2 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 92 elements); data/traces/shalamar-gardens-q499527.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. 2026-11-18 first auto model built at 500 m (386 elements, 6 wall ways, 13 water, 65 buildings). Open plan not found (only ASI 1909-10 report PDF and a 342x238 image). T2 needs: the terrace/water-channel plan.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
