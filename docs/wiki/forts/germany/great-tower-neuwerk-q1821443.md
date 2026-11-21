# Great Tower Neuwerk

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `great-tower-neuwerk-q1821443` |
| Coordinates | 53.91522, 8.49583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.91522/8.49583)) |
| Wikidata | [Q1821443](https://www.wikidata.org/wiki/Q1821443) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|lighthouse\|secular building |
| Administrative area | Hamburg-Mitte |
| Inception | 1310 |
| Designations | heritage monument in Hamburg |
| Wikipedia language editions | 7 |
| OSM `description` | red square brick tower |
| OSM `website` | https://leuchtturmneuwerk.de/ |

## What the model contains

Tier **T1**, status `outline-only`, 69 elements (outline 1, marker 2, coastline 1, road 29, zone 17, building 13, water 2, waterway 4).

Evidence: documented 0, mapped 69, inferred 0, derived 0; heights documented 8, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/62040943 historic=(none; chosen by its Wikidata id) Q1821443 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 5 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.91522/8.49583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|lighthouse\|secular building; sitelinks=7; wikidata:Q1821443 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 70 elements); data/traces/great-tower-neuwerk-q1821443.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 69 elements; outline osm:way/62040943 historic=(none; chosen by its Wikidata id) Q1821443 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
