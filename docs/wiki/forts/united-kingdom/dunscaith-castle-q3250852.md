# Dunscaith Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dunscaith-castle-q3250852` |
| Coordinates | 57.13655, -5.97587 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.13655/-5.97587)) |
| Wikidata | [Q3250852](https://www.wikidata.org/wiki/Q3250852) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Highland |
| Designations | scheduled monument |
| Wikipedia language editions | 9 |
| OSM `historic` | castle |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, marker 1, road 5, coastline 3, zone 3, cliff 7, water 2).

Evidence: documented 0, mapped 22, inferred 0, derived 2; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/74412998 historic=castle Q3250852 8 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":1151,"medianInside":6,"medianOutside":7.3}
- sea-1: DEM check failed {"cells":1596,"medianInside":6,"medianOutside":6}
- 26 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.13655/-5.97587) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=9; wikidata:Q3250852 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 22 elements); data/traces/dunscaith-castle-q3250852.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
