# Porta di Terra

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-di-terra-q141131700` |
| Coordinates | 39.08095, 17.1278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.08095/17.1278)) |
| Wikidata | [Q141131700](https://www.wikidata.org/wiki/Q141131700) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Crotone |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Palazzo Morelli, in Via Risorgimento, è un edificio restaurato nel 1885 In stile neoclassico romano. L'edificio ha un cortile chiuso con patio, un portone ad arco ornato lateralmente,  due facciate e due piani. |
| OSM `website` | https://www.comune.crotone.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/760 |

## What the model contains

Tier **T1**, status `outline+walls`, 355 elements (outline 1, marker 18, road 181, building 371, wall 46, coastline 1, zone 16, retaining-wall 1, water 1, waterway 1).

Evidence: documented 0, mapped 355, inferred 0, derived 0; heights documented 0, inferred 0, unknown 167.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/220454500 historic=castle 275 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 371 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 181 mapped (trace size budget); minor lanes are not drawn
- origin moved 275 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.08095/17.1278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q141131700 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 355 elements); data/traces/porta-di-terra-q141131700.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
