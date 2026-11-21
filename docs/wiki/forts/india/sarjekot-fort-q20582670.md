# Sarjekot Fort

> India · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `sarjekot-fort-q20582670` |
| Coordinates | 18.6344, 72.8642 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/18.6344/72.8642)) |
| Wikidata | [Q20582670](https://www.wikidata.org/wiki/Q20582670) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 4 elements (outline 1, coastline 1, water 1).

Evidence: documented 0, mapped 4, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/279966812 historic=fort Q3824083 23 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 27 m from the ledger point to the centre of the mapped site
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/18.6344/72.8642) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q20582670; South Asia site missing from the programme (no programme row within 2 km sharing a name word) \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 4 elements); data/traces/sarjekot-fort-q20582670.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
