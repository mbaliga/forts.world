# Siarö Fort

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `siaro-fort-q10667206` |
| Coordinates | 59.5549, 18.62345 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.5549/18.62345)) |
| Wikidata | [Q10667206](https://www.wikidata.org/wiki/Q10667206) (CC0) |
| Wikidata class | fort |
| Types | fortification\|coastal battery\|heritage site in Sweden\|military museum |
| Administrative area | Österåker Municipality |
| Inception | 1924 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Very well preserved & renovated oastal fortification from the early 1900s. |
| OSM `ruins` | yes |
| OSM `website` | https://www.sfv.se/ |

## What the model contains

Tier **T1**, status `outline-only`, 28 elements (outline 1, coastline 1, road 14, building 7, zone 4, waterway 1).

Evidence: documented 0, mapped 28, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/440058974 historic=fort Q10667206 171 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 173 m from the ledger point to the outline centroid
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.5549/18.62345) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|coastal battery\|heritage site in Sweden\|military museum; sitelinks=2; wikidata:Q10667206 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 28 elements); data/traces/siaro-fort-q10667206.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
