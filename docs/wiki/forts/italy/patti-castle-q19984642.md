# Patti Castle

> Italy · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `patti-castle-q19984642` |
| Coordinates | 38.15333, 14.96611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.15333/14.96611)) |
| Wikidata | [Q19984642](https://www.wikidata.org/wiki/Q19984642) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Patti |
| Wikipedia language editions | 2 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.regione.sicilia.it/beniculturali/dirbenicult/database/page_musei/pagina_musei.asp?ID=42&IdSito=49 |

## What the model contains

Tier **T1**, status `location-only`, 255 elements (road 69, waterway 1, coastline 1, building 100, zone 1, wall 36, retaining-wall 47).

Evidence: documented 0, mapped 255, inferred 0, derived 0; heights documented 0, inferred 0, unknown 183.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/5857627 historic=archaeological_site Q2236915 738 m from ledger point
- site is a site relation of 141 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (153 x 105 m)
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 724 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.15333/14.96611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q19984642 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 255 elements); data/traces/patti-castle-q19984642.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
