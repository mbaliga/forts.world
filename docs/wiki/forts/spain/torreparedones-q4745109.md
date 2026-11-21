# Torreparedones

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torreparedones-q4745109` |
| Coordinates | 37.75451, -4.37754 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.75451/-4.37754)) |
| Wikidata | [Q4745109](https://www.wikidata.org/wiki/Q4745109) (CC0) |
| Wikidata class | castle |
| Types | city\|village\|castle\|defensive wall\|archaeological site\|sanctuary |
| Administrative area | Baena |
| Designations | bien de interés cultural |
| Wikipedia language editions | 4 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, marker 1, building 2, road 12, wall 1, zone 4).

Evidence: documented 0, mapped 21, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1151633124 historic=ruins 118 m from ledger point
- origin moved 118 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.75451/-4.37754) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; city\|village\|castle\|defensive wall\|archaeological site\|sanctuary; sitelinks=4; wikidata:Q4745109 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/torreparedones-q4745109.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
