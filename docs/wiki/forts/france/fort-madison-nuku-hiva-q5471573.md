# Fort Madison, Nuku Hiva

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-madison-nuku-hiva-q5471573` |
| Coordinates | -8.9153, -140.095 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-8.9153/-140.095)) |
| Wikidata | [Q5471573](https://www.wikidata.org/wiki/Q5471573) (CC0) |
| Wikidata class | fort |
| Types | naval base\|fort |
| Administrative area | Nuku-Hiva |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 73 elements (outline 1, marker 4, coastline 1, building 41, road 20, waterway 5, water 1).

Evidence: documented 0, mapped 73, inferred 0, derived 1; heights documented 0, inferred 0, unknown 41.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1471842582 historic=monument 507 m from ledger point
- origin moved 507 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":187,"medianInside":-1,"medianOutside":15.7}
- 19 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-8.9153/-140.095) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; naval base\|fort; sitelinks=2; wikidata:Q5471573 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 73 elements); data/traces/fort-madison-nuku-hiva-q5471573.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
