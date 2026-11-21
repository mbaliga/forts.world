# Hampi

> India · Vijayanagara District · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hampi-q26732` |
| Coordinates | 15.334547, 76.462162 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.334547/76.462162)) |
| Wikidata | [Q26732](https://www.wikidata.org/wiki/Q26732) (CC0) |
| Programme catalogue | confidence high, significance rank 11; sources wikidata:Q26732;unesco:241;smith-newton:r958 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | https://whc.unesco.org/en/list/241 |

## What the model contains

Tier **T1**, status `outline+walls`, 103 elements (outline 1, marker 3, road 46, wall 1, building 18, waterway 7, zone 27).

Evidence: documented 0, mapped 103, inferred 0, derived 0; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/823174016 historic=archaeological_site Q26732 852 m from ledger point
- origin moved 901 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.334547/76.462162) | 2026-11-16 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-16 |

## Ledger note

type=fort; confidence=high; rank=11; sources=3 \| 2026-11-16: auto-T1 by the model-all pipeline run directly (outline+walls, 103 elements); data/traces/hampi-q26732.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-16: only 1820 map (public domain) fetched; no measured survey of the royal/sacred centre found open; the CC0 Vijayanagara maps are schematic territory maps. T2 needs the Michell/Fritz or ASI site plans (not open).

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
