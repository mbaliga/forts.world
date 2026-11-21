# Château de Malmaison

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-malmaison-q684846` |
| Coordinates | 48.87081, 2.1669 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.87081/2.1669)) |
| Wikidata | [Q684846](https://www.wikidata.org/wiki/Q684846) (CC0) |
| Wikidata class | castle |
| Types | castle\|art museum\|château\|historic house\|museum building |
| Administrative area | Rueil-Malmaison |
| Inception | 1700 |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 28 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |
| OSM `website` | https://musees-nationaux-malmaison.fr/chateau-malmaison/ |

## What the model contains

Tier **T1**, status `outline+walls`, 147 elements (outline 1, road 66, building 59, water 2, wall 1, zone 17).

Evidence: documented 0, mapped 147, inferred 0, derived 0; heights documented 0, inferred 0, unknown 61.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3283574 historic=castle Q684846 0 m from ledger point
- origin moved 1 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.87081/2.1669) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|art museum\|château\|historic house\|museum building; sitelinks=28; wikidata:Q684846 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 147 elements); data/traces/chateau-de-malmaison-q684846.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
