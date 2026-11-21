# Rostocker Tor (Teterow)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rostocker-tor-teterow-q2167890` |
| Coordinates | 53.7751, 12.5741 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.7751/12.5741)) |
| Wikidata | [Q2167890](https://www.wikidata.org/wiki/Q2167890) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Teterow |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |
| OSM `description` | früheres Stadttor |

## What the model contains

Tier **T1**, status `outline+walls`, 244 elements (outline 1, marker 2, road 106, water 1, waterway 10, building 723, wall 3, zone 1).

Evidence: documented 0, mapped 244, inferred 0, derived 0; heights documented 0, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/94829424 historic=city_gate Q2167890 9 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 723 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.7751/12.5741) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q2167890 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 243 elements); data/traces/rostocker-tor-teterow-q2167890.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 244 elements; outline osm:way/94829424 historic=city_gate Q2167890 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
