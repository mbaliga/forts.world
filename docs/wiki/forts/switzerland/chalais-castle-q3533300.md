# Chalais Castle

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chalais-castle-q3533300` |
| Coordinates | 46.267, 7.50918 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.267/7.50918)) |
| Wikidata | [Q3533300](https://www.wikidata.org/wiki/Q3533300) (CC0) |
| Wikidata class | ruin |
| Types | archaeological site\|castle ruin |
| Administrative area | Chalais |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 294 elements (outline 1, road 102, waterway 1, building 187, zone 2, retaining-wall 1).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 0, inferred 0, unknown 188.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/997162218 historic=tower Q3533300 0 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.267/7.50918) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; archaeological site\|castle ruin; sitelinks=3; wikidata:Q3533300 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 294 elements); data/traces/chalais-castle-q3533300.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 294 elements; outline osm:way/997162218 historic=tower Q3533300 0 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
