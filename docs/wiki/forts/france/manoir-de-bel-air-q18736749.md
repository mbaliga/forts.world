# Manoir de Bel-Air

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `manoir-de-bel-air-q18736749` |
| Coordinates | 48.47608, -4.7218 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.47608/-4.7218)) |
| Wikidata | [Q18736749](https://www.wikidata.org/wiki/Q18736749) (CC0) |
| Wikidata class | castle |
| Types | castle\|manor\|manor house |
| Administrative area | Brélès |
| Inception | C16 |
| Designations | classified historical monument |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 37 elements (outline 1, marker 3, zone 5, road 17, building 6, coastline 2, waterway 1, water 2).

Evidence: documented 0, mapped 37, inferred 0, derived 2; heights documented 0, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/53716910 historic=archaeological_site 27 m from ledger point
- origin moved 27 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":177,"medianInside":0,"medianOutside":17.3}
- sea-1: DEM check failed {"cells":355,"medianInside":12.9,"medianOutside":9.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.47608/-4.7218) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|manor\|manor house; sitelinks=3; wikidata:Q18736749 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 37 elements); data/traces/manoir-de-bel-air-q18736749.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
