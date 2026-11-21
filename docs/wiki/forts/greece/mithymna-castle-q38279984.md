# Mithymna Castle

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `mithymna-castle-q38279984` |
| Coordinates | 39.3682, 26.1775 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.3682/26.1775)) |
| Wikidata | [Q38279984](https://www.wikidata.org/wiki/Q38279984) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | West Lesvos Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `website` | http://odysseus.culture.gr/h/2/gh251.jsp?obj_id=15685 |

## What the model contains

Tier **T1**, status `outline+walls`, 319 elements (outline 1, marker 1, coastline 1, road 132, building 127, cliff 2, retaining-wall 27, wall 22, zone 6).

Evidence: documented 0, mapped 319, inferred 0, derived 0; heights documented 16, inferred 0, unknown 160.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/899910692 historic=castle Q38279984 23 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 24 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.3682/26.1775) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=4; wikidata:Q38279984 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 319 elements); data/traces/mithymna-castle-q38279984.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
