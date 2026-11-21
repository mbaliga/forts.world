# Fortaleza de São Tiago

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortaleza-de-sao-tiago-q3510244` |
| Coordinates | 32.64671, -16.89856 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.64671/-16.89856)) |
| Wikidata | [Q3510244](https://www.wikidata.org/wiki/Q3510244) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Santa Maria Maior |
| Inception | 1614 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 8 |
| OSM `historic` | fort |
| OSM `website` | https://www.arquipelagos.pt/imagem/planta-da-fortaleza-de-s-tiago-no-funchal-antonio-pedro-de-azevedo-1841-ilha-da-madeira/ |

## What the model contains

Tier **T1**, status `outline+walls`, 342 elements (outline 1, marker 1, road 92, building 213, coastline 6, wall 22, waterway 4, zone 2, water 1).

Evidence: documented 0, mapped 342, inferred 0, derived 1; heights documented 152, inferred 0, unknown 83.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1571749618 historic=fort Q3510244 19 m from ledger point
- origin moved 19 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":667,"medianInside":0,"medianOutside":15.9}
- 33 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.64671/-16.89856) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=8; wikidata:Q3510244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 342 elements); data/traces/fortaleza-de-sao-tiago-q3510244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
