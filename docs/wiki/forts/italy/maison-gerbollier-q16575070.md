# Maison Gerbollier

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `maison-gerbollier-q16575070` |
| Coordinates | 45.74696, 7.07268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.74696/7.07268)) |
| Wikidata | [Q16575070](https://www.wikidata.org/wiki/Q16575070) (CC0) |
| Wikidata class | fort |
| Types | fortified house\|city hall\|archives |
| Administrative area | La Salle |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 136 elements (outline 1, road 44, building 90, waterway 1).

Evidence: documented 0, mapped 136, inferred 0, derived 0; heights documented 0, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/964539989 historic=(none; chosen by its Wikidata id) Q16575070 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.74696/7.07268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house\|city hall\|archives; sitelinks=3; wikidata:Q16575070 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 137 elements); data/traces/maison-gerbollier-q16575070.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 136 elements; outline osm:way/964539989 historic=(none; chosen by its Wikidata id) Q16575070 4 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
