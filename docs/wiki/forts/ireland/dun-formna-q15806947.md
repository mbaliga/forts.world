# Dun Formna

> Ireland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dun-formna-q15806947` |
| Coordinates | 53.06222, -9.51923 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.06222/-9.51923)) |
| Wikidata | [Q15806947](https://www.wikidata.org/wiki/Q15806947) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | towerhouse |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 290 elements (outline 1, marker 1, coastline 1, road 13, wall 219, building 45, zone 6, cliff 4).

Evidence: documented 0, mapped 290, inferred 0, derived 0; heights documented 0, inferred 0, unknown 264.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225690502 historic=castle Q85790073 17 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 18 m from the ledger point to the outline centroid
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.06222/-9.51923) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q15806947 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 290 elements); data/traces/dun-formna-q15806947.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/ireland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
