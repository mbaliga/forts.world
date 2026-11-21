# Torre d'Addaia

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-d-addaia-q43142733` |
| Coordinates | 40.01201, 4.20099 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.01201/4.20099)) |
| Wikidata | [Q43142733](https://www.wikidata.org/wiki/Q43142733) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Es Mercadal |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | martello_tower |
| OSM `description` | Torre d'Addaia, torre de observación construida por los ingleses en 1800 durante la ocupación militar inglesa de la isla |

## What the model contains

Tier **T1**, status `outline-only`, 96 elements (outline 1, road 18, coastline 2, building 71, water 4).

Evidence: documented 0, mapped 96, inferred 0, derived 4; heights documented 71, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/741991645 historic=martello_tower Q43142733 1 m from ledger point
- sea-0: DEM check failed {"cells":149,"medianInside":-1638.3,"medianOutside":-1638.3}
- sea-1: DEM check failed {"cells":0,"medianInside":null,"medianOutside":-1638.3}
- sea-2: DEM check failed {"cells":103,"medianInside":-1638.3,"medianOutside":-1638.3}
- sea-3: DEM check failed {"cells":383,"medianInside":-1638.3,"medianOutside":-1638.3}
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.01201/4.20099) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q43142733 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 96 elements); data/traces/torre-d-addaia-q43142733.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 96 elements; outline osm:way/741991645 historic=martello_tower Q43142733 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
