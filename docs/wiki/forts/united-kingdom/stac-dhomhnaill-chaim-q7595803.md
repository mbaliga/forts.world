# Stac Dhòmhnaill Chaim

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stac-dhomhnaill-chaim-q7595803` |
| Coordinates | 58.17044, -7.10034 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/58.17044/-7.10034)) |
| Wikidata | [Q7595803](https://www.wikidata.org/wiki/Q7595803) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|point |
| Administrative area | Outer Hebrides |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `ruins` | building |

## What the model contains

Tier **T1**, status `outline+walls`, 101 elements (outline 1, coastline 2, road 12, waterway 51, building 8, wall 3, zone 21, water 3).

Evidence: documented 0, mapped 101, inferred 0, derived 0; heights documented 8, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/681561927 historic=ruins 490 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 491 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/58.17044/-7.10034) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|point; sitelinks=3; wikidata:Q7595803 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 101 elements); data/traces/stac-dhomhnaill-chaim-q7595803.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
