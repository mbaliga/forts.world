# Torre de Sant Sebastià (Palafrugell)

> Spain · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-sant-sebastia-palafrugell-q9088928` |
| Coordinates | 41.89697, 3.20268 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.89697/3.20268)) |
| Wikidata | [Q9088928](https://www.wikidata.org/wiki/Q9088928) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Palafrugell |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `location-only`, 62 elements (marker 3, road 29, waterway 1, building 11, zone 2, wall 1, retaining-wall 3, coastline 8, cliff 3, water 1).

Evidence: documented 0, mapped 62, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: no closed historic=* way/relation found; location-only scene
- sea-0: DEM check ok {"cells":38,"medianInside":0.1,"medianOutside":124.9}
- 45 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.89697/3.20268) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q9088928 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 62 elements); data/traces/torre-de-sant-sebastia-palafrugell-q9088928.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
