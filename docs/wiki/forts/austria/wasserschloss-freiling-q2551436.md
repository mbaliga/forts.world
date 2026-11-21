# Wasserschloss Freiling

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wasserschloss-freiling-q2551436` |
| Coordinates | 48.2365, 14.1234 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.2365/14.1234)) |
| Wikidata | [Q2551436](https://www.wikidata.org/wiki/Q2551436) (CC0) |
| Wikidata class | castle |
| Types | water castle |
| Administrative area | Oftering |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 84 elements (outline 1, zone 9, water 2, road 20, waterway 2, building 50).

Evidence: documented 0, mapped 84, inferred 0, derived 0; heights documented 2, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/134812620 historic=(none; chosen by its Wikidata id) Q2551436 142 m from ledger point
- origin moved 140 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.2365/14.1234) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; water castle; sitelinks=2; wikidata:Q2551436 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 72 elements); data/traces/wasserschloss-freiling-q2551436.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 84 elements; outline osm:way/134812620 historic=(none; chosen by its Wikidata id) Q2551436 142 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
