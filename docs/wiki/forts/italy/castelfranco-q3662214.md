# Castelfranco

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castelfranco-q3662214` |
| Coordinates | 44.17088, 8.35044 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.17088/8.35044)) |
| Wikidata | [Q3662214](https://www.wikidata.org/wiki/Q3662214) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Finale Ligure |
| Inception | 1365 |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 195 elements (outline 1, marker 3, road 63, coastline 1, building 118, zone 2, retaining-wall 4, water 2, waterway 1).

Evidence: documented 0, mapped 195, inferred 0, derived 1; heights documented 2, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/156513295 historic=castle Q3662214 23 m from ledger point
- origin moved 22 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":30,"medianInside":0,"medianOutside":22.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.17088/8.35044) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3662214 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 195 elements); data/traces/castelfranco-q3662214.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
