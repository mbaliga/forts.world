# Noorderplantsoen

> Netherlands · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `noorderplantsoen-q2626701` |
| Coordinates | 53.22353, 6.55682 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.22353/6.55682)) |
| Wikidata | [Q2626701](https://www.wikidata.org/wiki/Q2626701) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|sconce\|park |
| Administrative area | Groningen |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 386 elements (outline 1, marker 2, road 456, zone 105, building 3212, waterway 3, water 3, retaining-wall 1, wall 1).

Evidence: documented 0, mapped 386, inferred 0, derived 0; heights documented 8, inferred 0, unknown 114.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/222442513 historic=archaeological_site Q2626701 67 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 3212 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 456 mapped (trace size budget); minor lanes are not drawn
- origin moved 68 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.22353/6.55682) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|sconce\|park; sitelinks=6; wikidata:Q2626701 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 386 elements); data/traces/noorderplantsoen-q2626701.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/netherlands.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
