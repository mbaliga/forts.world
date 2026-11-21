# Atalaia de São Gens

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `atalaia-de-sao-gens-q66813798` |
| Coordinates | 38.43261, -7.36461 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.43261/-7.36461)) |
| Wikidata | [Q66813798](https://www.wikidata.org/wiki/Q66813798) (CC0) |
| Wikidata class | fortification |
| Types | cultural heritage\|watchtower |
| Administrative area | Monsaraz |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 0 |
| OSM `historic` | watchtower |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 21).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1102812672 historic=watchtower Q66813798 120 m from ledger point
- origin moved 120 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.43261/-7.36461) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; cultural heritage\|watchtower; sitelinks=0; wikidata:Q66813798 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 23 elements); data/traces/atalaia-de-sao-gens-q66813798.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 22 elements; outline osm:way/1102812672 historic=watchtower Q66813798 120 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
