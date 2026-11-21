# Castello di Montalbano Elicona

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castello-di-montalbano-elicona-q17383456` |
| Coordinates | 38.02372, 15.01104 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.02372/15.01104)) |
| Wikidata | [Q17383456](https://www.wikidata.org/wiki/Q17383456) (CC0) |
| Wikidata class | castle |
| Types | castle\|historical park museum\|military museum building\|palazzo museum\|museum of a public entity\|religious museum |
| Administrative area | Montalbano Elicona |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `website` | https://www.comune.montalbanoelicona.me.it/turismo/il-castello/panoramica-castello.aspx |

## What the model contains

Tier **T1**, status `outline+walls`, 334 elements (outline 1, road 233, zone 11, building 659, wall 31, retaining-wall 21).

Evidence: documented 0, mapped 334, inferred 0, derived 0; heights documented 0, inferred 0, unknown 172.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225049393 historic=castle Q17383456 14 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 659 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 233 mapped (trace size budget); minor lanes are not drawn
- origin moved 14 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.02372/15.01104) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|historical park museum\|military museum building\|palazzo museum\|museum of a public entity\|religious museum; sitelinks=2; wikidata:Q17383456 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 334 elements); data/traces/castello-di-montalbano-elicona-q17383456.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
