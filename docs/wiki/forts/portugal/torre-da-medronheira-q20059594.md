# Torre da Medronheira

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-da-medronheira-q20059594` |
| Coordinates | 37.08946, -8.19605 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.08946/-8.19605)) |
| Wikidata | [Q20059594](https://www.wikidata.org/wiki/Q20059594) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Ferreiras |
| Designations | heritage without legal protection |
| Wikipedia language editions | 4 |
| OSM `historic` | watchtower |
| OSM `heritage` | no |

## What the model contains

Tier **T1**, status `outline-only`, 106 elements (outline 1, road 40, building 59, waterway 1, zone 3, coastline 1, water 1).

Evidence: documented 0, mapped 106, inferred 0, derived 1; heights documented 4, inferred 0, unknown 55.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/402978479 historic=watchtower Q20059594 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":81,"medianInside":0,"medianOutside":28.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.08946/-8.19605) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=4; wikidata:Q20059594 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 105 elements); data/traces/torre-da-medronheira-q20059594.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 106 elements; outline osm:way/402978479 historic=watchtower Q20059594 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
