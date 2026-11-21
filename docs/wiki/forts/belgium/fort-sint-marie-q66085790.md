# Fort Sint-Marie

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sint-marie-q66085790` |
| Coordinates | 51.25323, 4.29668 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.25323/4.29668)) |
| Wikidata | [Q66085790](https://www.wikidata.org/wiki/Q66085790) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Zwijndrecht |
| Designations | vastgesteld bouwkundig erfgoed |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | https://id.erfgoed.net/erfgoedobjecten/14698 |
| OSM `website` | https://www.fortengordels.be/forten/fort-sint-marie |

## What the model contains

Tier **T1**, status `outline-only`, 109 elements (outline 1, water 9, waterway 2, road 48, zone 6, building 43).

Evidence: documented 0, mapped 109, inferred 0, derived 0; heights documented 0, inferred 0, unknown 43.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/167628287 historic=fort Q66085790 104 m from ledger point
- origin moved 108 m from the ledger point to the outline centroid
- 135 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.25323/4.29668) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q66085790 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 109 elements); data/traces/fort-sint-marie-q66085790.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
