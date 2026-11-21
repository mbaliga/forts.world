# Baltit Fort, Hunza

> Pakistan · Gilgit-Baltistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `baltit` |
| Coordinates | 36.326, 74.669 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.326/74.669)) |
| Wikidata | [Q1247039](https://www.wikidata.org/wiki/Q1247039) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Karimabad |
| Designations | Tentative World Heritage Site |
| Wikipedia language editions | 13 |
| Programme catalogue | confidence high, significance rank 281; sources catalogue:baltit;catalogue:altit;wikidata:Q1247039;wikidata:Q1438427;osm:w400150600;osm:w400183523 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 137 elements (outline 1, road 10, waterway 1, building 125).

Evidence: documented 0, mapped 137, inferred 0, derived 0; heights documented 0, inferred 0, unknown 125.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/400150600 historic=castle Q1247039 99 m from ledger point
- origin moved 99 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.326/74.669) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Research notes

- [docs/research/baltit-pass.md](../../../research/baltit-pass.md)

## Ledger note

Alpha-Z batch (2026-11-14): 10 forts spread across A-Z starting at Z, distinct from batch 0 and every other alpha batch. data/traces/baltit.trace.json (tools/build-t1.mjs), docs/research/baltit-pass.md. Hunza fort: 8th-century core per Wikipedia (1990s work, unconfirmed), 16th-century rebuild (1539 cannon), abandoned 1945, AKTC restoration done 1996. AKTC conservation drawings are the T2 source. Alpha-Z batch (2026-11-14): 10 forts spread across A-Z starting at Z, distinct from batch 0 and every other alpha batch. data/traces/baltit.trace.json (tools/build-t1.mjs), docs/research/baltit-pass.md. Hunza fort: 8th-century core per Wikipedia (1990s work, unconfirmed), 16th-century rebuild (1539 cannon), abandoned 1945, AKTC restoration done 1996. AKTC conservation drawings are the T2 source. \| 2026-11-18: the first OSM fetch (2026-11-14) had returned nothing; OSM re-fetched with the same query and 500 m radius (458 elements), terrain tiles unchanged, auto-T1 rebuilt (outline-only, 137 elements). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/pakistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
