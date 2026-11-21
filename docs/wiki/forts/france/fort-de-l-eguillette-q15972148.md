# Fort de l'Éguillette

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-l-eguillette-q15972148` |
| Coordinates | 43.10032, 5.91009 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.10032/5.91009)) |
| Wikidata | [Q15972148](https://www.wikidata.org/wiki/Q15972148) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Toulon |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 26 elements (outline 1, road 4, building 19, coastline 1, water 1).

Evidence: documented 0, mapped 26, inferred 0, derived 1; heights documented 0, inferred 0, unknown 19.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/186668956 historic=fort Q15972148 15 m from ledger point
- origin moved 11 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":288,"medianInside":0,"medianOutside":2.7}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.10032/5.91009) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q15972148 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 26 elements); data/traces/fort-de-l-eguillette-q15972148.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
