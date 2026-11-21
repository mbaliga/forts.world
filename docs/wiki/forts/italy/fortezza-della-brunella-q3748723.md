# Fortezza della Brunella

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortezza-della-brunella-q3748723` |
| Coordinates | 44.20886, 9.97311 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.20886/9.97311)) |
| Wikidata | [Q3748723](https://www.wikidata.org/wiki/Q3748723) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Aulla |
| Designations | Italian national heritage |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | La fortezza della Brunella è un'imponente fortificazione rinascimentale che si trova ad Aulla, in provincia di Massa Carrara, nella Lunigiana. La struttura domina Aulla e la confluenza del fiume Magra e del torrente Aulella. |

## What the model contains

Tier **T1**, status `outline+walls`, 95 elements (outline 1, marker 1, road 50, building 40, waterway 1, wall 1, retaining-wall 1).

Evidence: documented 0, mapped 95, inferred 0, derived 0; heights documented 36, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/9701877 historic=castle Q3748723 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- 41 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.20886/9.97311) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress; sitelinks=3; wikidata:Q3748723 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 95 elements); data/traces/fortezza-della-brunella-q3748723.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
