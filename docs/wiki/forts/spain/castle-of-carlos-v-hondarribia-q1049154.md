# Castle of Carlos V, Hondarribia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-carlos-v-hondarribia-q1049154` |
| Coordinates | 43.36356, -1.79127 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.36356/-1.79127)) |
| Wikidata | [Q1049154](https://www.wikidata.org/wiki/Q1049154) (CC0) |
| Wikidata class | castle |
| Types | palace\|castle\|monument\|castle of the Kingdom of Navarre |
| Administrative area | Hondarribia |
| Designations | Basque government heritage site\|bien de interés cultural |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 335 elements (outline 1, marker 5, road 127, building 173, waterway 2, wall 19, coastline 1, zone 5, retaining-wall 1, water 1).

Evidence: documented 0, mapped 335, inferred 0, derived 1; heights documented 16, inferred 0, unknown 177.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3323973 historic=castle Q1049154 18 m from ledger point
- origin moved 22 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":26,"medianInside":0,"medianOutside":13.4}
- 37 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.36356/-1.79127) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; palace\|castle\|monument\|castle of the Kingdom of Navarre; sitelinks=6; wikidata:Q1049154 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 335 elements); data/traces/castle-of-carlos-v-hondarribia-q1049154.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
