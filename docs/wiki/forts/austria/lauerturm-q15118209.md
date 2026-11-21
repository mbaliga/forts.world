# Lauerturm

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lauerturm-q15118209` |
| Coordinates | 48.42233, 13.98845 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.42233/13.98845)) |
| Wikidata | [Q15118209](https://www.wikidata.org/wiki/Q15118209) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|yes\|tower |
| Administrative area | Sankt Martin im Mühlkreis |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive;stately |
| OSM `heritage` | 2 |
| OSM `website` | http://www.burgenkunde.at/oberoesterreich/neuhaus/neuhaus.htm |

## What the model contains

Tier **T1**, status `outline+walls`, 50 elements (outline 1, marker 1, road 31, building 7, wall 2, waterway 4, zone 4).

Evidence: documented 0, mapped 50, inferred 0, derived 0; heights documented 0, inferred 0, unknown 9.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/106092082 historic=castle Q2242655 261 m from ledger point
- origin moved 261 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.42233/13.98845) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|yes\|tower; sitelinks=2; wikidata:Q15118209 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 50 elements); data/traces/lauerturm-q15118209.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
