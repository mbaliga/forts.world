# Princess Ongnyeobong Fortress

> South Korea · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `princess-ongnyeobong-fortress-q19940550` |
| Coordinates | 36.45944, 127.135 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.45944/127.135)) |
| Wikidata | [Q19940550](https://www.wikidata.org/wiki/Q19940550) (CC0) |
| Wikidata class | fort |
| Types | fortress\|historic site |
| Designations | Lists of Monuments in Chungcheongnam-do |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | https://whc.unesco.org/en/list/1477 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 21 elements (outline 1, road 16, waterway 1, building 2).

Evidence: documented 0, mapped 21, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157482752 historic=castle Q12584692 817 m from ledger point
- origin moved 816 m from the ledger point to the outline centroid
- 15 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.45944/127.135) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|historic site; sitelinks=1; wikidata:Q19940550 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 21 elements); data/traces/princess-ongnyeobong-fortress-q19940550.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/south-korea.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
