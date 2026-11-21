# Nemuro Peninsula Chashi Sites

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `nemuro-peninsula-chashi-sites-q11110966` |
| Coordinates | 43.38861, 145.7825 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.38861/145.7825)) |
| Wikidata | [Q11110966](https://www.wikidata.org/wiki/Q11110966) (CC0) |
| Wikidata class | fortification |
| Types | chashi |
| Administrative area | Nemuro |
| Designations | Historic Site of Japan |
| Wikipedia language editions | 6 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | ringfort |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, marker 2, road 9, coastline 3, building 13, cliff 1, water 1).

Evidence: documented 0, mapped 30, inferred 0, derived 1; heights documented 0, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1307970131 historic=archaeological_site 6 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":224,"medianInside":0.6,"medianOutside":6.8}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.38861/145.7825) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; chashi; sitelinks=6; wikidata:Q11110966 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 30 elements); data/traces/nemuro-peninsula-chashi-sites-q11110966.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
