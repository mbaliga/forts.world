# Fortress of São Francisco do Penedo

> Angola · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-sao-francisco-do-penedo-q2272674` |
| Coordinates | -8.77306, 13.28611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-8.77306/13.28611)) |
| Wikidata | [Q2272674](https://www.wikidata.org/wiki/Q2272674) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Luanda |
| Designations | Tentative World Heritage Site\|Heritage of Portuguese Influence |
| Wikipedia language editions | 6 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline-only`, 16 elements (outline 1, road 12, coastline 1, zone 1, water 1).

Evidence: documented 0, mapped 16, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/207272393 historic=fort Q9292748 37 m from ledger point
- origin moved 35 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":158,"medianInside":5.3,"medianOutside":27.1}
- 3 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-8.77306/13.28611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=6; wikidata:Q2272674 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 16 elements); data/traces/fortress-of-sao-francisco-do-penedo-q2272674.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/angola.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
