# Angellara Tower

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `angellara-tower-q20009499` |
| Coordinates | 40.65224, 14.80981 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.65224/14.80981)) |
| Wikidata | [Q20009499](https://www.wikidata.org/wiki/Q20009499) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Salerno |
| Inception | 1501 |
| Wikipedia language editions | 4 |
| OSM `description` | La Torre Angellara è edificata nei pressi della foce del torrente Mariconda. Questa roccaforte faceva parte di un sistema di difesa realizzato a partire dal 1563 per difendere la città dai Saraceni |

## What the model contains

Tier **T1**, status `outline-only`, 60 elements (outline 1, road 17, building 38, waterway 2, coastline 1, water 1).

Evidence: documented 0, mapped 60, inferred 0, derived 1; heights documented 0, inferred 0, unknown 38.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/146701110 historic=(none; chosen by its Wikidata id) Q20009499 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":99,"medianInside":0,"medianOutside":6.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.65224/14.80981) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=4; wikidata:Q20009499 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 63 elements); data/traces/angellara-tower-q20009499.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 60 elements; outline osm:way/146701110 historic=(none; chosen by its Wikidata id) Q20009499 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
