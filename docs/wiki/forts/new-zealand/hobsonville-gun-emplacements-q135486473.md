# Hobsonville Gun Emplacements

> New Zealand · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hobsonville-gun-emplacements-q135486473` |
| Coordinates | -36.80503, 174.66814 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-36.80503/174.66814)) |
| Wikidata | [Q135486473](https://www.wikidata.org/wiki/Q135486473) (CC0) |
| Wikidata class | fortification |
| Types | heritage site\|archaeological site\|anti-aircraft battery |
| Administrative area | Auckland Region |
| Inception | 1942 |
| Designations | Auckland Council Category B historic place listing |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 275 elements (outline 1, road 154, coastline 2, retaining-wall 1, building 244, zone 1).

Evidence: documented 0, mapped 275, inferred 0, derived 0; heights documented 0, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/843363862 historic=ruins 258 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 244 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 154 mapped (trace size budget); minor lanes are not drawn
- origin moved 258 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-36.80503/174.66814) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; heritage site\|archaeological site\|anti-aircraft battery; sitelinks=0; wikidata:Q135486473 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 275 elements); data/traces/hobsonville-gun-emplacements-q135486473.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
