# Oskar-Fredriksborg Fortress

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oskar-fredriksborg-fortress-q10612991` |
| Coordinates | 59.39861, 18.43528 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/59.39861/18.43528)) |
| Wikidata | [Q10612991](https://www.wikidata.org/wiki/Q10612991) (CC0) |
| Wikidata class | fort |
| Types | fortress\|architectural ensemble\|fort\|heritage site in Sweden |
| Administrative area | Vaxholm Municipality |
| Inception | 1877 |
| Designations | governmental listed building complex |
| Wikipedia language editions | 4 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, coastline 3, building 12, road 26, zone 4, waterway 1, water 2).

Evidence: documented 0, mapped 49, inferred 0, derived 2; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/23991916 historic=fort Q10612991 10 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":160,"medianInside":9.1,"medianOutside":23.1}
- sea-1: DEM check failed {"cells":575,"medianInside":20.6,"medianOutside":16.5}
- 2 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/59.39861/18.43528) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|architectural ensemble\|fort\|heritage site in Sweden; sitelinks=4; wikidata:Q10612991 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 49 elements); data/traces/oskar-fredriksborg-fortress-q10612991.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
