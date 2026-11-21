# Fort de l'Est

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-est-q113666419` |
| Coordinates | 49.6715, -1.5987 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.6715/-1.5987)) |
| Wikidata | [Q113666419](https://www.wikidata.org/wiki/Q113666419) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Cherbourg-en-Cotentin |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 2, road 1, retaining-wall 1, building 1, zone 1, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/261716301 historic=ruins 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":370,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.6715/-1.5987) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=1; wikidata:Q113666419 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/fort-de-l-est-q113666419.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
