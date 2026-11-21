# Valentin submarine pens

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `valentin-submarine-pens-q466256` |
| Coordinates | 53.21699, 8.50628 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.21699/8.50628)) |
| Wikidata | [Q466256](https://www.wikidata.org/wiki/Q466256) (CC0) |
| Wikidata class | fortification |
| Types | museum\|bunker\|shipyard\|submarine pen\|memorial |
| Administrative area | Blumenthal |
| Inception | 1943 |
| Designations | protected cultural heritage monument in Bremen (state) |
| Wikipedia language editions | 12 |
| OSM `historic` | heritage |
| OSM `heritage` | 4 |
| OSM `description` | Kulturdenkmal, siehe http://wiki.openstreetmap.org/wiki/Bremen/Kulturdenkm%C3%A4ler |
| OSM `ruins` | yes |
| OSM `website` | https://www.denkort-bunker-valentin.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 180 elements (outline 1, marker 1, road 52, water 5, coastline 1, building 100, waterway 9, zone 11).

Evidence: documented 0, mapped 180, inferred 0, derived 2; heights documented 1, inferred 0, unknown 99.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/161529403 historic=heritage Q466256 138 m from ledger point
- origin moved 135 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":32,"medianInside":-2,"medianOutside":4.9}
- sea-1: DEM check ok {"cells":30,"medianInside":-2,"medianOutside":4.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.21699/8.50628) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; museum\|bunker\|shipyard\|submarine pen\|memorial; sitelinks=12; wikidata:Q466256 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 76 elements); data/traces/valentin-submarine-pens-q466256.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 180 elements; outline osm:way/161529403 historic=heritage Q466256 138 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
