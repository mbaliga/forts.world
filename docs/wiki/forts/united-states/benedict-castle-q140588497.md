# Benedict Castle

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `benedict-castle-q140588497` |
| Coordinates | 33.95021, -117.34771 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.95021/-117.34771)) |
| Wikidata | [Q140588497](https://www.wikidata.org/wiki/Q140588497) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Riverside |
| Inception | 1921 |
| Designations | City of Riverside Landmark |
| Wikipedia language editions | 0 |
| OSM `heritage` | 8 |

## What the model contains

Tier **T1**, status `outline-only`, 98 elements (outline 1, road 38, waterway 4, building 55).

Evidence: documented 0, mapped 98, inferred 0, derived 0; heights documented 54, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/958250508 historic=(none; chosen by its Wikidata id) Q140588497 20 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.95021/-117.34771) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=0; wikidata:Q140588497 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 98 elements); data/traces/benedict-castle-q140588497.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 98 elements; outline osm:way/958250508 historic=(none; chosen by its Wikidata id) Q140588497 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
