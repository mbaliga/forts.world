# Torre Bombarda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-bombarda-q43146787` |
| Coordinates | 38.56327, -0.05013 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.56327/-0.05013)) |
| Wikidata | [Q43146787](https://www.wikidata.org/wiki/Q43146787) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|watchtower |
| Administrative area | L'Alfàs del Pi |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 21 elements (outline 1, coastline 1, road 8, cliff 1, zone 7, building 1, water 2).

Evidence: documented 0, mapped 21, inferred 0, derived 2; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/517908849 historic=yes 86 m from ledger point
- origin moved 85 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":34,"medianInside":0,"medianOutside":32.9}
- sea-1: DEM check ok {"cells":16,"medianInside":0.1,"medianOutside":30.5}
- 8 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.56327/-0.05013) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|watchtower; sitelinks=3; wikidata:Q43146787 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 21 elements); data/traces/torre-bombarda-q43146787.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
