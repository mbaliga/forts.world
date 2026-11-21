# Pabellón de Mixtos

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pabellon-de-mixtos-q66438649` |
| Coordinates | 42.8127, -1.64982 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.8127/-1.64982)) |
| Wikidata | [Q66438649](https://www.wikidata.org/wiki/Q66438649) (CC0) |
| Wikidata class | fort |
| Types | building\|fortification\|art exhibition |
| Administrative area | Navarre |
| Inception | 1680 |
| Designations | Asset of Cultural Interest  (Navarre) |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 2, road 513, zone 41, building 54, wall 65, retaining-wall 1, water 4, waterway 12).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 23, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/42946489 historic=castle Q206258 105 m from ledger point
- roads capped: kept the 150 longest of 513 mapped (trace size budget); minor lanes are not drawn
- origin moved 107 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.8127/-1.64982) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; building\|fortification\|art exhibition; sitelinks=1; wikidata:Q66438649 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/pabellon-de-mixtos-q66438649.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
