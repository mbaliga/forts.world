# Fort Spijkerboor

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-spijkerboor-q4934042` |
| Coordinates | 52.54072, 4.84107 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.54072/4.84107)) |
| Wikidata | [Q4934042](https://www.wikidata.org/wiki/Q4934042) (CC0) |
| Wikidata class | fort |
| Types | fort\|fort |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | Onderdeel van Stelling van Amsterdam |
| OSM `website` | https://www.natuurmonumenten.nl/natuurgebieden/fort-bij-spijkerboor |

## What the model contains

Tier **T1**, status `outline-only`, 106 elements (outline 1, marker 1, road 33, water 17, zone 32, building 19, waterway 3).

Evidence: documented 0, mapped 106, inferred 0, derived 0; heights documented 2, inferred 0, unknown 17.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/281011141 historic=fort Q4934042 4 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 2638 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.54072/4.84107) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|fort; sitelinks=2; wikidata:Q4934042 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 106 elements); data/traces/fort-spijkerboor-q4934042.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
