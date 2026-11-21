# Fortí d'Illetes

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forti-d-illetes-q43146029` |
| Coordinates | 39.5368, 2.5864 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.5368/2.5864)) |
| Wikidata | [Q43146029](https://www.wikidata.org/wiki/Q43146029) (CC0) |
| Wikidata class | fort |
| Types | fort\|building |
| Administrative area | Calvià |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `description` | Prison fort from the Spanish Civil War |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 171 elements (outline 1, road 93, coastline 3, zone 1, building 66, water 4, retaining-wall 2).

Evidence: documented 0, mapped 171, inferred 0, derived 1; heights documented 0, inferred 0, unknown 69.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/14162681 historic=fort Q43146029 25 m from ledger point
- origin moved 33 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":16,"medianInside":0.4,"medianOutside":48.6}
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.5368/2.5864) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|building; sitelinks=1; wikidata:Q43146029 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 171 elements); data/traces/forti-d-illetes-q43146029.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
