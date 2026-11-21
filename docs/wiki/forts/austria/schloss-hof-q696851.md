# Schloss Hof

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schloss-hof-q696851` |
| Coordinates | 48.21397, 16.93578 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.21397/16.93578)) |
| Wikidata | [Q696851](https://www.wikidata.org/wiki/Q696851) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|museum\|château |
| Administrative area | Engelhartstetten |
| Inception | 1726 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.schlosshof.at/ |

## What the model contains

Tier **T1**, status `outline+walls`, 184 elements (outline 1, road 120, building 5, wall 18, retaining-wall 3, water 9, zone 28).

Evidence: documented 0, mapped 184, inferred 0, derived 0; heights documented 0, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/168762 historic=castle Q696851 12 m from ledger point
- origin moved 67 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.21397/16.93578) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|museum\|château; sitelinks=13; wikidata:Q696851 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 184 elements); data/traces/schloss-hof-q696851.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
