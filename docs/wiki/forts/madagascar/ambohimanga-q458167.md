# Ambohimanga

> Madagascar · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ambohimanga-q458167` |
| Coordinates | -18.75917, 47.56278 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-18.75917/47.56278)) |
| Wikidata | [Q458167](https://www.wikidata.org/wiki/Q458167) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|human settlement\|hill |
| Administrative area | Ambohimanga Rova |
| Designations | World Heritage Site |
| UNESCO WHC id | 950 |
| Wikipedia language editions | 44 |
| OSM `historic` | heritage |
| OSM `heritage` | 1 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 71 elements (outline 1, road 13, zone 1, building 55).

Evidence: documented 0, mapped 71, inferred 0, derived 0; heights documented 0, inferred 0, unknown 56.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/430091408 historic=heritage Q458167 155 m from ledger point
- origin moved 154 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-18.75917/47.56278) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|human settlement\|hill; sitelinks=44; wikidata:Q458167 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 100 elements); data/traces/ambohimanga-q458167.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 71 elements; outline osm:way/430091408 historic=heritage Q458167 155 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/madagascar.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
