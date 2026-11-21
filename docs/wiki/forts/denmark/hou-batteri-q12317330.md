# Hou Batteri

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hou-batteri-q12317330` |
| Coordinates | 57.05448, 10.37501 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.05448/10.37501)) |
| Wikidata | [Q12317330](https://www.wikidata.org/wiki/Q12317330) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|sconce\|artillery battery |
| Administrative area | Aalborg Municipality |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | sconce |

## What the model contains

Tier **T1**, status `outline-only`, 195 elements (outline 1, marker 2, road 41, water 2, waterway 5, building 143, coastline 1).

Evidence: documented 0, mapped 195, inferred 0, derived 1; heights documented 0, inferred 0, unknown 143.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/608705831 historic=archaeological_site Q12317330 0 m from ledger point
- sea-0: DEM check ok {"cells":36,"medianInside":1.1,"medianOutside":4.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.05448/10.37501) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|sconce\|artillery battery; sitelinks=1; wikidata:Q12317330 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 195 elements); data/traces/hou-batteri-q12317330.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
