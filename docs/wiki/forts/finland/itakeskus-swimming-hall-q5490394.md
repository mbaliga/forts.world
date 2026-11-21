# Itäkeskus swimming hall

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `itakeskus-swimming-hall-q5490394` |
| Coordinates | 60.2125, 25.07583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.2125/25.07583)) |
| Wikidata | [Q5490394](https://www.wikidata.org/wiki/Q5490394) (CC0) |
| Wikidata class | fortification |
| Types | bunker\|swimming center\|underground structure |
| Administrative area | Helsinki |
| Inception | 1993 |
| Wikipedia language editions | 2 |
| OSM `website` | https://liikunta.hel.fi/fi/venues/tprek:41835 |

## What the model contains

Tier **T1**, status `outline+walls`, 261 elements (outline 1, road 297, building 32, waterway 3, wall 7, zone 64, retaining-wall 2, water 2).

Evidence: documented 0, mapped 261, inferred 0, derived 0; heights documented 21, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1237517931 historic=(none; chosen by its Wikidata id) Q5490394 50 m from ledger point
- roads capped: kept the 150 longest of 297 mapped (trace size budget); minor lanes are not drawn
- origin moved 50 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.2125/25.07583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; bunker\|swimming center\|underground structure; sitelinks=2; wikidata:Q5490394 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 349 elements); data/traces/itakeskus-swimming-hall-q5490394.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 261 elements; outline osm:way/1237517931 historic=(none; chosen by its Wikidata id) Q5490394 50 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
