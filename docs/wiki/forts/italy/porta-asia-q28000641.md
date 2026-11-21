# porta Asia

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-asia-q28000641` |
| Coordinates | 44.71251, 11.31057 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.71251/11.31057)) |
| Wikidata | [Q28000641](https://www.wikidata.org/wiki/Q28000641) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Pieve di Cento |
| Inception | 1350 |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | city_gate |

## What the model contains

Tier **T1**, status `outline+walls`, 225 elements (outline 1, road 74, building 144, zone 2, wall 4).

Evidence: documented 0, mapped 225, inferred 0, derived 0; heights documented 0, inferred 0, unknown 148.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33898333 historic=city_gate Q28000641 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.71251/11.31057) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q28000641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 226 elements); data/traces/porta-asia-q28000641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 225 elements; outline osm:way/33898333 historic=city_gate Q28000641 3 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
