# Palazzo Borromeo

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-borromeo-q3889707` |
| Coordinates | 45.46335, 9.18194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.46335/9.18194)) |
| Wikidata | [Q3889707](https://www.wikidata.org/wiki/Q3889707) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|architectural ensemble\|Palazzo |
| Administrative area | Milan |
| Inception | C13 |
| Designations | Italian national heritage |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Complesso quattrocentesco ancora oggi di proprietà dell'antica casata milanese, occupa quasi un intero isolato, articolandosi su 2 cortili, e che si affaccia per un lato sulla Piazza Santa Maria Podone |

## What the model contains

Tier **T1**, status `outline+walls`, 328 elements (outline 1, marker 11, road 215, zone 13, building 130, wall 32, waterway 1).

Evidence: documented 0, mapped 328, inferred 0, derived 0; heights documented 98, inferred 0, unknown 54.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/361040 historic=castle Q3889707 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 130 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 215 mapped (trace size budget); minor lanes are not drawn
- origin moved 8 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.46335/9.18194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|architectural ensemble\|Palazzo; sitelinks=7; wikidata:Q3889707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 328 elements); data/traces/palazzo-borromeo-q3889707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
