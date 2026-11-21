# Castle of San Cristovo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-cristovo-q43144457` |
| Coordinates | 43.4613, -8.2973 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4613/-8.2973)) |
| Wikidata | [Q43144457](https://www.wikidata.org/wiki/Q43144457) (CC0) |
| Wikidata class | fort |
| Types | fortification\|monument |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | ruins |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 11 elements (outline 1, coastline 3, road 3, zone 3, water 1).

Evidence: documented 0, mapped 11, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/33712005 historic=ruins 28 m from ledger point
- origin moved 26 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":248,"medianInside":0,"medianOutside":31.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4613/-8.2973) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification\|monument; sitelinks=1; wikidata:Q43144457 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 11 elements); data/traces/castle-of-san-cristovo-q43144457.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
