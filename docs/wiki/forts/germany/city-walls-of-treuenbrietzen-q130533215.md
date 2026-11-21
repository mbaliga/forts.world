# City walls of Treuenbrietzen

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-treuenbrietzen-q130533215` |
| Coordinates | 52.0967, 12.86742 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.0967/12.86742)) |
| Wikidata | [Q130533215](https://www.wikidata.org/wiki/Q130533215) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Treuenbrietzen |
| Designations | architectural heritage monument in Brandenburg |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Sabinchenbrunnen in Treuenbrietzen |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, marker 3, road 47, building 619, waterway 4, zone 2, wall 1).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 1, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368601214 historic=yes Q110229230 229 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 619 mapped (trace size budget); the rest of the town is not drawn
- origin moved 229 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.0967/12.86742) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=1; wikidata:Q130533215 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/city-walls-of-treuenbrietzen-q130533215.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
