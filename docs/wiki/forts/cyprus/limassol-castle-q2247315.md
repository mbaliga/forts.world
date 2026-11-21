# Limassol Castle

> Cyprus · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `limassol-castle-q2247315` |
| Coordinates | 34.67231, 33.04163 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.67231/33.04163)) |
| Wikidata | [Q2247315](https://www.wikidata.org/wiki/Q2247315) (CC0) |
| Wikidata class | castle |
| Types | castle\|archaeological museum |
| Administrative area | Limassol Municipality |
| Wikipedia language editions | 18 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `description` | It is situated in the heart of the old town, just above the old harbour. According to tradition, this is where Richard the Lionheart married Berengaria of Navarre and crowned her Queen of England in 1191. |
| OSM `website` | https://www.visitcyprus.com/discover-cyprus/culture/sites-and-monuments/lemesos-limassol-medieval-castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 293 elements (outline 1, marker 1, road 202, building 232, coastline 7, wall 8, waterway 3, water 3).

Evidence: documented 0, mapped 293, inferred 0, derived 3; heights documented 11, inferred 0, unknown 117.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/175830695 historic=castle Q2247315 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 232 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 202 mapped (trace size budget); minor lanes are not drawn
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":2,"medianInside":3.2,"medianOutside":7.3}
- sea-1: DEM check ok {"cells":9,"medianInside":-0.1,"medianOutside":7.3}
- sea-2: DEM check failed {"cells":0,"medianInside":null,"medianOutside":7.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.67231/33.04163) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|archaeological museum; sitelinks=18; wikidata:Q2247315 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 293 elements); data/traces/limassol-castle-q2247315.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/cyprus.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
