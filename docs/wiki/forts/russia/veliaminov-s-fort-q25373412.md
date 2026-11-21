# Veliaminov's Fort

> Russia · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `veliaminov-s-fort-q25373412` |
| Coordinates | 44.09667, 39.07194 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.09667/39.07194)) |
| Wikidata | [Q25373412](https://www.wikidata.org/wiki/Q25373412) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Wikipedia language editions | 2 |
| OSM `historic` | monument |

## What the model contains

Tier **T1**, status `outline-only`, 138 elements (outline 1, marker 7, road 61, building 52, coastline 1, zone 15, water 1).

Evidence: documented 0, mapped 138, inferred 0, derived 1; heights documented 15, inferred 0, unknown 37.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/241003353 historic=monument 205 m from ledger point
- origin moved 208 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":75,"medianInside":-2.3,"medianOutside":6}
- 178 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.09667/39.07194) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q25373412 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 138 elements); data/traces/veliaminov-s-fort-q25373412.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/russia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
