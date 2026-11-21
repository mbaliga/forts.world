# Culzean Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `culzean-castle-q899545` |
| Coordinates | 55.35464, -4.78929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.35464/-4.78929)) |
| Wikidata | [Q899545](https://www.wikidata.org/wiki/Q899545) (CC0) |
| Wikidata class | castle |
| Types | castle\|tower house\|country house |
| Administrative area | South Ayrshire |
| Designations | category A listed building |
| Wikipedia language editions | 19 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `website` | https://www.nts.org.uk/Property/Culzean-Castle-and-Country-Park/ |

## What the model contains

Tier **T1**, status `outline+walls`, 128 elements (outline 1, marker 8, road 60, zone 14, building 16, coastline 1, wall 27, water 1).

Evidence: documented 0, mapped 128, inferred 0, derived 1; heights documented 3, inferred 0, unknown 40.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/359480200 historic=castle Q899545 4 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":615,"medianInside":8.7,"medianOutside":25.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.35464/-4.78929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|tower house\|country house; sitelinks=19; wikidata:Q899545 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 128 elements); data/traces/culzean-castle-q899545.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
