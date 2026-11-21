# Citadel of Herat (Qala Ikhtiyaruddin)

> Afghanistan · Herat · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `herat-citadel` |
| Coordinates | 34.345833, 62.188611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.345833/62.188611)) |
| Wikidata | [Q10859317](https://www.wikidata.org/wiki/Q10859317) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Herat |
| Wikipedia language editions | 17 |
| Programme catalogue | confidence medium, significance rank 382; sources catalogue:herat-citadel;wikidata:Q10859317 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 163 elements (outline 1, road 41, building 673, zone 1).

Evidence: documented 0, mapped 163, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/421847649 historic=castle Q10859317 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 673 mapped (trace size budget); the rest of the town is not drawn
- origin moved 21 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.345833/62.188611) | 2026-11-14 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-14 |

## Ledger note

coords from wikidata (was 34.347,62.193) Alpha-C batch (2026-11-14): top 10 free C-named sites; see docs/fort-fidelity/batch-alpha-C.csv. \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 163 elements); data/traces/herat-citadel.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/afghanistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
