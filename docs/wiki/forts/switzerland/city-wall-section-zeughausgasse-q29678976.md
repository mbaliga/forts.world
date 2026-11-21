# City wall, section Zeughausgasse

> Switzerland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-wall-section-zeughausgasse-q29678976` |
| Coordinates | 47.48481, 7.73604 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.48481/7.73604)) |
| Wikidata | [Q29678976](https://www.wikidata.org/wiki/Q29678976) (CC0) |
| Wikidata class | fortification |
| Types | building\|built structure\|city walls |
| Administrative area | Liestal |
| Designations | class B Swiss cultural property of regional significance |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 276 elements (outline 1, marker 1, road 200, waterway 2, building 376, zone 1, retaining-wall 1).

Evidence: documented 0, mapped 276, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/236302305 historic=(none; chosen by its Wikidata id) Q29678976 3 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 376 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 200 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.48481/7.73604) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; building\|built structure\|city walls; sitelinks=0; wikidata:Q29678976 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 275 elements); data/traces/city-wall-section-zeughausgasse-q29678976.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 276 elements; outline osm:way/236302305 historic=(none; chosen by its Wikidata id) Q29678976 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/switzerland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
