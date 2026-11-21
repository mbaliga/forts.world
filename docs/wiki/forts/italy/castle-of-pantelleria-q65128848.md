# Castle of Pantelleria

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-pantelleria-q65128848` |
| Coordinates | 36.83139, 11.94332 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.83139/11.94332)) |
| Wikidata | [Q65128848](https://www.wikidata.org/wiki/Q65128848) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Pantelleria |
| Designations | Italian national heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 286 elements (outline 1, road 129, building 129, wall 17, zone 7, coastline 1, water 2).

Evidence: documented 0, mapped 286, inferred 0, derived 2; heights documented 14, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/28519982 historic=castle Q65128848 18 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":9.4}
- sea-1: DEM check ok {"cells":98,"medianInside":0,"medianOutside":11.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.83139/11.94332) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q65128848 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 286 elements); data/traces/castle-of-pantelleria-q65128848.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
