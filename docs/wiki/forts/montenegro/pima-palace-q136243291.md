# Pima Palace

> Montenegro · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pima-palace-q136243291` |
| Coordinates | 42.42422, 18.77042 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.42422/18.77042)) |
| Wikidata | [Q136243291](https://www.wikidata.org/wiki/Q136243291) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace |
| Administrative area | Kotor Municipality |
| Inception | 1700 |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | The Buca palace is situated opposite to the palace Pima. Today’s look of this palace does not depict the historical importance of the family Buca, one of the most eminent families in Kotor |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, marker 3, road 211, building 227, wall 21, waterway 1, retaining-wall 13, zone 9, coastline 6, water 6).

Evidence: documented 0, mapped 330, inferred 0, derived 6; heights documented 32, inferred 0, unknown 122.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165389713 historic=castle 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 227 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 211 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":400,"medianInside":2.5,"medianOutside":11.8}
- sea-1: DEM check ok {"cells":8,"medianInside":0.6,"medianOutside":3.2}
- sea-2: DEM check ok {"cells":139,"medianInside":0,"medianOutside":7.3}
- sea-3: DEM check ok {"cells":392,"medianInside":2.8,"medianOutside":6.3}
- sea-4: DEM check ok {"cells":396,"medianInside":2.8,"medianOutside":6.9}
- sea-5: DEM check ok {"cells":400,"medianInside":2.5,"medianOutside":11.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.42422/18.77042) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace; sitelinks=1; wikidata:Q136243291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 330 elements); data/traces/pima-palace-q136243291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/montenegro.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
