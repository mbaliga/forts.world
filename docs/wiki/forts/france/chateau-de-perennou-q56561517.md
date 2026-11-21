# Château de Pérennou

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-perennou-q56561517` |
| Coordinates | 47.91361, -4.15222 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.91361/-4.15222)) |
| Wikidata | [Q56561517](https://www.wikidata.org/wiki/Q56561517) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Plomelin |
| Designations | classified historical monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 32 elements (outline 1, building 10, road 17, coastline 1, waterway 2, water 1).

Evidence: documented 0, mapped 32, inferred 0, derived 1; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/86170186 historic=castle Q56561517 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":1,"medianInside":14.4,"medianOutside":35.7}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.91361/-4.15222) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=2; wikidata:Q56561517 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 32 elements); data/traces/chateau-de-perennou-q56561517.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
