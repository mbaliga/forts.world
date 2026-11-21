# Stadtbefestigung

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `stadtbefestigung-q41388226` |
| Coordinates | 49.84113, 9.14755 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.84113/9.14755)) |
| Wikidata | [Q41388226](https://www.wikidata.org/wiki/Q41388226) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Obernburg am Main |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `heritage` | yes |
| OSM `description` | Runder Turm Teil der Stadtbefestigung in Obernburg am Main |
| OSM `website` | https://www.hvv-obernburg.de/html/stadtbefestigung.html#RunderTurm |

## What the model contains

Tier **T1**, status `outline+walls`, 297 elements (outline 1, marker 7, road 158, water 1, building 539, wall 13, waterway 1, retaining-wall 1, zone 3).

Evidence: documented 0, mapped 297, inferred 0, derived 0; heights documented 0, inferred 0, unknown 134.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/458483013 historic=yes 119 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 539 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 158 mapped (trace size budget); minor lanes are not drawn
- origin moved 119 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.84113/9.14755) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=0; wikidata:Q41388226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 297 elements); data/traces/stadtbefestigung-q41388226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
