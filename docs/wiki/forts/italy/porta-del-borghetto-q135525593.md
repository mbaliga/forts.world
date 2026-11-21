# Porta del Borghetto

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-del-borghetto-q135525593` |
| Coordinates | 44.3585, 8.57249 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.3585/8.57249)) |
| Wikidata | [Q135525593](https://www.wikidata.org/wiki/Q135525593) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Varazze |
| Inception | 1500 |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline+walls`, 312 elements (outline 1, marker 5, road 190, waterway 8, retaining-wall 6, building 251, coastline 1, wall 14, zone 6, water 1).

Evidence: documented 0, mapped 312, inferred 0, derived 1; heights documented 5, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/152609367 historic=archaeological_site 81 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 251 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 190 mapped (trace size budget); minor lanes are not drawn
- origin moved 82 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":24,"medianInside":0,"medianOutside":17.2}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.3585/8.57249) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=0; wikidata:Q135525593 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 312 elements); data/traces/porta-del-borghetto-q135525593.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
