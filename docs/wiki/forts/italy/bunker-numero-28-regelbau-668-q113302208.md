# Bunker numero 28 Regelbau 668

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-numero-28-regelbau-668-q113302208` |
| Coordinates | 44.44326, 12.29544 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.44326/12.29544)) |
| Wikidata | [Q113302208](https://www.wikidata.org/wiki/Q113302208) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Ravenna |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |

## What the model contains

Tier **T1**, status `outline-only`, 127 elements (outline 1, road 28, building 93, zone 3, coastline 1, water 1).

Evidence: documented 0, mapped 127, inferred 0, derived 1; heights documented 0, inferred 0, unknown 93.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/369600181 historic=(none; chosen by its Wikidata id) Q113302208 3 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":34,"medianInside":0,"medianOutside":1.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.44326/12.29544) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q113302208 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 128 elements); data/traces/bunker-numero-28-regelbau-668-q113302208.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 127 elements; outline osm:way/369600181 historic=(none; chosen by its Wikidata id) Q113302208 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
