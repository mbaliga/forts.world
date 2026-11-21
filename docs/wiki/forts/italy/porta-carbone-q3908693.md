# Porta Carbone

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `porta-carbone-q3908693` |
| Coordinates | 38.12118, 13.36608 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.12118/13.36608)) |
| Wikidata | [Q3908693](https://www.wikidata.org/wiki/Q3908693) (CC0) |
| Wikidata class | fortification |
| Types | city gate |
| Administrative area | Palermo |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline+walls`, 172 elements (outline 1, road 76, building 53, wall 11, zone 18, retaining-wall 9, coastline 2, water 2).

Evidence: documented 0, mapped 172, inferred 0, derived 1; heights documented 10, inferred 0, unknown 63.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/926609495 historic=castle Q1048829 128 m from ledger point
- origin moved 128 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":50,"medianInside":0.1,"medianOutside":9.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.12118/13.36608) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city gate; sitelinks=1; wikidata:Q3908693 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 172 elements); data/traces/porta-carbone-q3908693.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
