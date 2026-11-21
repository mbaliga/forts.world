# Knowe of Queen o' Howe, broch, Westray

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `knowe-of-queen-o-howe-broch-westray-q56668287` |
| Coordinates | 59.32758, -3.01228 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.32758/-3.01228)) |
| Wikidata | [Q56668287](https://www.wikidata.org/wiki/Q56668287) (CC0) |
| Wikidata class | fortification |
| Types | broch |
| Administrative area | Orkney Islands |
| Designations | scheduled monument |
| Wikipedia language editions | 0 |
| OSM `historic` | archaeological_site |
| OSM `description` | Knowe of the Queen of Howe - Broch (Iron Age) |

## What the model contains

Tier **T1**, status `outline+walls`, 14 elements (outline 1, road 6, coastline 1, zone 2, wall 3, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1385670710 historic=archaeological_site Q56668287 30 m from ledger point
- origin moved 30 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":140,"medianInside":5.1,"medianOutside":9.9}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.32758/-3.01228) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; broch; sitelinks=0; wikidata:Q56668287 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 14 elements); data/traces/knowe-of-queen-o-howe-broch-westray-q56668287.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
