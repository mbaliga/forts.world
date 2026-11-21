# Ripley Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ripley-castle-q7335614` |
| Coordinates | 54.04022, -1.57048 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.04022/-1.57048)) |
| Wikidata | [Q7335614](https://www.wikidata.org/wiki/Q7335614) (CC0) |
| Wikidata class | castle |
| Types | house\|castle\|historic house museum |
| Administrative area | Ripley |
| Designations | Grade II listed park and garden\|Grade I listed building |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `barrier` | wall |
| OSM `website` | https://www.ripleycastle.co.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 2, waterway 2, road 52, water 1, wall 34, building 65, zone 20).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 100.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/96311692 historic=castle Q7335614 16 m from ledger point
- origin moved 17 m from the ledger point to the outline centroid
- 13 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.04022/-1.57048) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; house\|castle\|historic house museum; sitelinks=9; wikidata:Q7335614 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/ripley-castle-q7335614.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
