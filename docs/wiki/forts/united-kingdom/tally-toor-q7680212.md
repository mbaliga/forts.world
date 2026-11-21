# Tally Toor

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tally-toor-q7680212` |
| Coordinates | 55.98719, -3.17346 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.98719/-3.17346)) |
| Wikidata | [Q7680212](https://www.wikidata.org/wiki/Q7680212) (CC0) |
| Wikidata class | fortification |
| Types | Martello tower |
| Administrative area | City of Edinburgh |
| Inception | 1810 |
| Designations | scheduled monument |
| Wikipedia language editions | 2 |
| OSM `historic` | martello_tower |
| OSM `heritage` | 2 |
| OSM `website` | https://canmore.org.uk/site/51960 |

## What the model contains

Tier **T1**, status `outline-only`, 15 elements (outline 1, road 6, building 1, coastline 4, waterway 1, water 2).

Evidence: documented 0, mapped 15, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1211574351 historic=martello_tower Q7680212 3 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":140,"medianInside":2,"medianOutside":4.6}
- sea-1: DEM check failed {"cells":15,"medianInside":4,"medianOutside":3.8}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.98719/-3.17346) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; Martello tower; sitelinks=2; wikidata:Q7680212 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 15 elements); data/traces/tally-toor-q7680212.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 15 elements; outline osm:way/1211574351 historic=martello_tower Q7680212 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
