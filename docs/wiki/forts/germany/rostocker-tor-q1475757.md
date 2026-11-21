# Rostocker Tor

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `rostocker-tor-q1475757` |
| Coordinates | 54.2437, 12.4264 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.2437/12.4264)) |
| Wikidata | [Q1475757](https://www.wikidata.org/wiki/Q1475757) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Ribnitz-Damgarten |
| Designations | architectural heritage monument in Mecklenburg-Vorpommern |
| Wikipedia language editions | 2 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline-only`, 339 elements (outline 1, road 69, waterway 8, coastline 1, building 256, zone 3, water 1).

Evidence: documented 0, mapped 339, inferred 0, derived 0; heights documented 34, inferred 0, unknown 222.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39325736 historic=city_gate Q1475757 4 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.2437/12.4264) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=2; wikidata:Q1475757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 341 elements); data/traces/rostocker-tor-q1475757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 339 elements; outline osm:way/39325736 historic=city_gate Q1475757 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
