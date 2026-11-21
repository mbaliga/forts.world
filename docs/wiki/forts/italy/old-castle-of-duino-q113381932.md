# Old castle of Duino

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `old-castle-of-duino-q113381932` |
| Coordinates | 45.77211, 13.60062 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.77211/13.60062)) |
| Wikidata | [Q113381932](https://www.wikidata.org/wiki/Q113381932) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Duino-Aurisina |
| Designations | Italian national heritage |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 94 elements (outline 1, marker 1, road 26, building 55, cliff 3, retaining-wall 1, zone 1, wall 2, coastline 2, water 2).

Evidence: documented 0, mapped 94, inferred 0, derived 2; heights documented 51, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80306851 historic=ruins Q113381932 11 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":18,"medianInside":0.5,"medianOutside":0.1}
- sea-1: DEM check ok {"cells":229,"medianInside":0,"medianOutside":16.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.77211/13.60062) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=1; wikidata:Q113381932 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 90 elements); data/traces/old-castle-of-duino-q113381932.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 94 elements; outline osm:way/80306851 historic=ruins Q113381932 11 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
