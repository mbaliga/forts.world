# Fort of Santiago do Outão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-santiago-do-outao-q10283916` |
| Coordinates | 38.48849, -8.93509 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.48849/-8.93509)) |
| Wikidata | [Q10283916](https://www.wikidata.org/wiki/Q10283916) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Inception | 1572 |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 5 |
| OSM `heritage` | 2 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 52 elements (outline 1, road 22, building 14, zone 2, wall 3, cliff 7, coastline 1, water 1).

Evidence: documented 0, mapped 52, inferred 0, derived 1; heights documented 3, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186969854 historic=(none; chosen by its Wikidata id) Q10283916 66 m from ledger point
- origin moved 68 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":358,"medianInside":0,"medianOutside":50.7}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.48849/-8.93509) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=5; wikidata:Q10283916 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 46 elements); data/traces/fort-of-santiago-do-outao-q10283916.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 52 elements; outline osm:way/186969854 historic=(none; chosen by its Wikidata id) Q10283916 66 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
