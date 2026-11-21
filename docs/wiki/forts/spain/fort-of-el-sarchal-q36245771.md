# Fort of El Sarchal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-el-sarchal-q36245771` |
| Coordinates | 35.89016, -5.2968 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.89016/-5.2968)) |
| Wikidata | [Q36245771](https://www.wikidata.org/wiki/Q36245771) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|castle\|fort\|monument |
| Administrative area | Ceuta |
| Inception | C17 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 45 elements (outline 1, coastline 2, building 11, road 26, wall 5).

Evidence: documented 0, mapped 45, inferred 0, derived 0; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1544010282 historic=castle Q35733404 797 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 797 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.89016/-5.2968) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|castle\|fort\|monument; sitelinks=2; wikidata:Q36245771 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 45 elements); data/traces/fort-of-el-sarchal-q36245771.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
