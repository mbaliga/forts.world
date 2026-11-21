# Palazzo Gambacorta

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palazzo-gambacorta-q113289799` |
| Coordinates | 41.5932, 14.91091 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.5932/14.91091)) |
| Wikidata | [Q113289799](https://www.wikidata.org/wiki/Q113289799) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|no\|Palazzo |
| Administrative area | Macchia Valfortore |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `ruins` | no |
| OSM `website` | http://turismo.provincia.campobasso.it/flex/cm/pages/ServeBLOB.php/L/IT/IDPagina/407 |

## What the model contains

Tier **T1**, status `outline-only`, 174 elements (outline 1, road 38, building 373, zone 15).

Evidence: documented 0, mapped 174, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/687731458 historic=castle Q113289799 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 373 mapped (trace size budget); the rest of the town is not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.5932/14.91091) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|no\|Palazzo; sitelinks=1; wikidata:Q113289799 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 174 elements); data/traces/palazzo-gambacorta-q113289799.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
