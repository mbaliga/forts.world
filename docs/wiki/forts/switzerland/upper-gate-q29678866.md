# Upper Gate

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `upper-gate-q29678866` |
| Coordinates | 47.48318, 7.73554 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.48318/7.73554)) |
| Wikidata | [Q29678866](https://www.wikidata.org/wiki/Q29678866) (CC0) |
| Wikidata class | fortification |
| Types | tower\|city gate\|building\|built structure |
| Administrative area | Liestal |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline-only`, 282 elements (outline 1, marker 2, road 148, waterway 6, building 327, zone 1, retaining-wall 4).

Evidence: documented 0, mapped 282, inferred 0, derived 0; heights documented 1, inferred 0, unknown 123.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236319186 historic=city_gate Q29678866 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 327 mapped (trace size budget); the rest of the town is not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.48318/7.73554) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; tower\|city gate\|building\|built structure; sitelinks=2; wikidata:Q29678866 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 284 elements); data/traces/upper-gate-q29678866.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 282 elements; outline osm:way/236319186 historic=city_gate Q29678866 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
