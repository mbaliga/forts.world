# Bårnholm

> Finland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `barnholm-q24359399` |
| Coordinates | 60.20564, 22.01106 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/60.20564/22.01106)) |
| Wikidata | [Q24359399](https://www.wikidata.org/wiki/Q24359399) (CC0) |
| Wikidata class | fort |
| Types | island\|hillfort |
| Administrative area | Nagu |
| Designations | registered archaeological site in Finland |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, marker 1, coastline 3, zone 2, cliff 1).

Evidence: documented 0, mapped 8, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/25716892 historic=(none; chosen by its Wikidata id) Q24359399 14 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 15 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/60.20564/22.01106) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; island\|hillfort; sitelinks=4; wikidata:Q24359399 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 10 elements); data/traces/barnholm-q24359399.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 8 elements; outline osm:way/25716892 historic=(none; chosen by its Wikidata id) Q24359399 14 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/finland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
