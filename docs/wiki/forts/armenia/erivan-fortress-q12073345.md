# Erivan Fortress

> Armenia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `erivan-fortress-q12073345` |
| Coordinates | 40.17306, 44.50278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.17306/44.50278)) |
| Wikidata | [Q12073345](https://www.wikidata.org/wiki/Q12073345) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Yerevan |
| Inception | 1582 |
| Wikipedia language editions | 19 |
| OSM `historic` | ruins |
| OSM `description` | Название "Красный" мост имеет по цвету вулканического туфа, из которого он построен. Так же известен как Старый разданский мост и мост ходжи Пилава, по имени купца Канакера, выделившего деньги на реконструкцию. В данный момент разрушен. |

## What the model contains

Tier **T1**, status `outline+walls`, 187 elements (outline 1, marker 1, road 75, waterway 4, building 81, wall 20, zone 2, cliff 2, retaining-wall 1).

Evidence: documented 0, mapped 187, inferred 0, derived 0; heights documented 15, inferred 0, unknown 87.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1166072142 historic=ruins Q3107472 279 m from ledger point
- origin moved 277 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.17306/44.50278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=19; wikidata:Q12073345 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 187 elements); data/traces/erivan-fortress-q12073345.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/armenia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
