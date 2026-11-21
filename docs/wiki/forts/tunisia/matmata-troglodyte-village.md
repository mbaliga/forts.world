# Matmata troglodyte village (pit dwellings)

> Tunisia · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `matmata-troglodyte-village` |
| Coordinates | 33.54368, 9.96592 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.54368/9.96592)) |

## What the model contains

Tier **T1**, status `location-only`, 384 elements (road 77, building 201, pit 26, waterway 3, wall 74, zone 3).

Evidence: documented 0, mapped 384, inferred 0, derived 0; heights documented 0, inferred 0, unknown 275.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- overlay applied: 0 heights, 0 elements, 1 eras

Matmata el Qadima, a Berber village of pit dwellings: each house is a courtyard dug into the ground, with rooms cut into the courtyard walls. 26 courtyard pits are mapped in OpenStreetMap as rim outlines (natural=cliff with building=yes) and are drawn as holes in the ground.

What is assumed: No pit depth is mapped, so every pit is drawn 7 m deep to a flat floor. Published descriptions give the courtyards as 5-10 m across and no deeper than about 9 m (Fabrizi 2023, MAT-01), or about 9 m across and as deep (BME Habitatio, MAT-02). The rooms, tunnels and stairs inside the pits are not drawn: none are mapped. Walls without a height tag use the programme's schematic 6 m; buildings use 4 m.

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.54368/9.96592) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |
| Mariabruna Fabrizi, "Matmata: underground dwellings for an extreme climate", SOCKS, 26 March 2023 | cited for figures only (nothing copied) | [link](https://socks-studio.com/2023/03/26/matmata-underground-dwellings-for-an-extreme-climate/) | 2026-11-18 |
| Habitatio (Budapest University of Technology and Economics), Matmata pit dwellings | cited for figures only (nothing copied) | [link](https://habitatio.epitesz.bme.hu/en/?p=4758) | 2026-11-18 |

## Ledger note

world; type=troglodyte pit-dwelling village; 26 pit rims mapped in OSM as natural=cliff + building around Matmata el Qadima (node/262722264); window centred on the pit cluster; Kalaa Matmata ruins are a separate row \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 384 elements); data/traces/matmata-troglodyte-village.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/tunisia.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
