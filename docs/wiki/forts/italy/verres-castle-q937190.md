# Verrès Castle

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `verres-castle-q937190` |
| Coordinates | 45.66982, 7.69561 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.66982/7.69561)) |
| Wikidata | [Q937190](https://www.wikidata.org/wiki/Q937190) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|religious museum\|historical park museum\|military museum building\|museum of a public entity |
| Administrative area | Verrès |
| Designations | Italian national heritage |
| Wikipedia language editions | 13 |
| OSM `historic` | castle |
| OSM `barrier` | wall |
| OSM `website` | https://www.lovevda.it/it/banca-dati/8/castelli-e-torri/verres/castello-di-verres/864 |

## What the model contains

Tier **T1**, status `outline+walls`, 99 elements (outline 1, marker 1, road 35, waterway 2, building 42, cliff 6, zone 5, wall 2, retaining-wall 4).

Evidence: documented 0, mapped 99, inferred 0, derived 0; heights documented 0, inferred 0, unknown 49.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/118079558 historic=castle Q937190 31 m from ledger point
- origin moved 33 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.66982/7.69561) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|religious museum\|historical park museum\|military museum building\|museum of a public entity; sitelinks=13; wikidata:Q937190 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 99 elements); data/traces/verres-castle-q937190.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
