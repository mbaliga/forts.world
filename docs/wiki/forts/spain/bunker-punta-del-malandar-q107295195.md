# Bunker Punta del Malandar

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bunker-punta-del-malandar-q107295195` |
| Coordinates | 36.79627, -6.36688 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.79627/-6.36688)) |
| Wikidata | [Q107295195](https://www.wikidata.org/wiki/Q107295195) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|bunker |
| Administrative area | Almonte |
| Wikipedia language editions | 1 |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, road 3, coastline 1, water 1).

Evidence: documented 0, mapped 6, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/768973680 historic=(none; chosen by its Wikidata id) Q107295195 7 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":160,"medianInside":0,"medianOutside":7.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.79627/-6.36688) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|bunker; sitelinks=1; wikidata:Q107295195 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 6 elements); data/traces/bunker-punta-del-malandar-q107295195.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 6 elements; outline osm:way/768973680 historic=(none; chosen by its Wikidata id) Q107295195 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
