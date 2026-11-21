# Orpesa la Vella

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `orpesa-la-vella-q96942866` |
| Coordinates | 40.0788, 0.13559 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.0788/0.13559)) |
| Wikidata | [Q96942866](https://www.wikidata.org/wiki/Q96942866) (CC0) |
| Wikidata class | fortification |
| Types | archaeological site\|city walls |
| Administrative area | Oropesa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |

## What the model contains

Tier **T1**, status `location-only`, 29 elements (marker 1, road 18, coastline 3, building 3, wall 2, water 2).

Evidence: documented 0, mapped 29, inferred 0, derived 2; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":20,"medianInside":0.9,"medianOutside":3.3}
- sea-1: DEM check ok {"cells":178,"medianInside":0,"medianOutside":13.4}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.0788/0.13559) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological site\|city walls; sitelinks=1; wikidata:Q96942866 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 29 elements); data/traces/orpesa-la-vella-q96942866.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
