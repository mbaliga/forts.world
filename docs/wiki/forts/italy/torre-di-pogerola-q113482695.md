# Torre di Pogerola

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-di-pogerola-q113482695` |
| Coordinates | 40.63534, 14.59737 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.63534/14.59737)) |
| Wikidata | [Q113482695](https://www.wikidata.org/wiki/Q113482695) (CC0) |
| Wikidata class | fortification |
| Types | coastal tower |
| Administrative area | Amalfi |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, coastline 1, road 10, cliff 1, zone 1, building 24).

Evidence: documented 0, mapped 38, inferred 0, derived 0; heights documented 0, inferred 0, unknown 24.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1085135077 historic=(none; chosen by its Wikidata id) Q113482695 42 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 41 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.63534/14.59737) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; coastal tower; sitelinks=1; wikidata:Q113482695 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 45 elements); data/traces/torre-di-pogerola-q113482695.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 38 elements; outline osm:way/1085135077 historic=(none; chosen by its Wikidata id) Q113482695 42 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
