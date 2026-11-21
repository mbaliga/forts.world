# Torra di Mortella

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torra-di-mortella-q10984637` |
| Coordinates | 42.71499, 9.25694 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.71499/9.25694)) |
| Wikidata | [Q10984637](https://www.wikidata.org/wiki/Q10984637) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|tower\|Genoese towers in Corsica |
| Administrative area | Saint-Florent |
| Designations | monument historique inscrit |
| Wikipedia language editions | 7 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |
| OSM `ruins` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, coastline 1, road 12, waterway 1, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/442097680 historic=ruins Q10984637 0 m from ledger point
- sea-0: DEM check ok {"cells":256,"medianInside":0,"medianOutside":15.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.71499/9.25694) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|tower\|Genoese towers in Corsica; sitelinks=7; wikidata:Q10984637 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/torra-di-mortella-q10984637.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
