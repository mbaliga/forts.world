# Palácio Ludovice

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-ludovice-q20060497` |
| Coordinates | 38.71412, -9.14431 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71412/-9.14431)) |
| Wikidata | [Q20060497](https://www.wikidata.org/wiki/Q20060497) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|hotel building\|cultural heritage |
| Administrative area | Misericórdia |
| Inception | 1747 |
| Designations | Included in protected site\|Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Construído no séc. XVIII,segundo desenho do arq. João Frederico Ludovice para sua residência,este edifício pode ser considerado um exemplo arquitectónico típico do barroco tardio nacional, assim como um dos mais importantes exemplos da arquitectur |

## What the model contains

Tier **T1**, status `outline+walls`, 359 elements (outline 1, marker 16, road 174, building 487, retaining-wall 12, zone 15, wall 45).

Evidence: documented 0, mapped 359, inferred 0, derived 0; heights documented 14, inferred 0, unknown 163.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1390101 historic=castle Q20060497 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 487 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 174 mapped (trace size budget); minor lanes are not drawn
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71412/-9.14431) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|hotel building\|cultural heritage; sitelinks=2; wikidata:Q20060497 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 359 elements); data/traces/palacio-ludovice-q20060497.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
