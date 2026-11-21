# Takahanga

> New Zealand · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `takahanga-q137669411` |
| Coordinates | -42.40436, 173.6829 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-42.40436/173.6829)) |
| Wikidata | [Q137669411](https://www.wikidata.org/wiki/Q137669411) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|pa\|marae |
| Administrative area | Kaikōura District |
| Inception | 1992 |
| Designations | Heritage New Zealand Category 2 historic place listing |
| Wikipedia language editions | 4 |

## What the model contains

Tier **T1**, status `location-only`, 89 elements (marker 2, road 36, cliff 1, building 40, zone 6, water 2, waterway 1, coastline 1).

Evidence: documented 0, mapped 89, inferred 0, derived 1; heights documented 1, inferred 0, unknown 39.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":40,"medianInside":4.6,"medianOutside":16.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-42.40436/173.6829) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|pa\|marae; sitelinks=4; wikidata:Q137669411 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 89 elements); data/traces/takahanga-q137669411.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/new-zealand.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
