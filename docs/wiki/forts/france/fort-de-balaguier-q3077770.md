# Fort de Balaguier

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-balaguier-q3077770` |
| Coordinates | 43.0944, 5.91103 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.0944/5.91103)) |
| Wikidata | [Q3077770](https://www.wikidata.org/wiki/Q3077770) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | La Seyne-sur-Mer |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, marker 12, road 6, building 19, coastline 1, water 1).

Evidence: documented 0, mapped 40, inferred 0, derived 1; heights documented 5, inferred 0, unknown 14.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186672066 historic=fort Q3077770 6 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":297,"medianInside":0,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.0944/5.91103) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q3077770 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 40 elements); data/traces/fort-de-balaguier-q3077770.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
