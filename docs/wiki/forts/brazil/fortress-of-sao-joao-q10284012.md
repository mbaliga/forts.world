# Fortress of São João

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-sao-joao-q10284012` |
| Coordinates | -20.32081, -40.32539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-20.32081/-40.32539)) |
| Wikidata | [Q10284012](https://www.wikidata.org/wiki/Q10284012) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fortress\|historic site\|fort\|real property\|destroyed building or structure |
| Administrative area | Vitória |
| Designations | heritage site of the Espírito Santo State Council of Culture |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |

## What the model contains

Tier **T1**, status `outline-only`, 229 elements (outline 1, road 105, coastline 2, building 424, water 1).

Evidence: documented 0, mapped 229, inferred 0, derived 1; heights documented 90, inferred 0, unknown 30.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/51536242 historic=ruins 213 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 424 mapped (trace size budget); the rest of the town is not drawn
- origin moved 213 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":28,"medianInside":0.9,"medianOutside":11.8}
- 10 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-20.32081/-40.32539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fortress\|historic site\|fort\|real property\|destroyed building or structure; sitelinks=3; wikidata:Q10284012 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 229 elements); data/traces/fortress-of-sao-joao-q10284012.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
