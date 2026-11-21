# City walls of Le Malzieu-Ville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-le-malzieu-ville-q3424641` |
| Coordinates | 44.8556, 3.33203 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8556/3.33203)) |
| Wikidata | [Q3424641](https://www.wikidata.org/wiki/Q3424641) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Le Malzieu-Ville |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | citywalls |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 212 elements (outline 1, marker 6, zone 7, road 72, waterway 5, building 381, water 1).

Evidence: documented 0, mapped 212, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/380406362 historic=citywalls Q3424641 8 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 381 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8556/3.33203) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3424641 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 212 elements); data/traces/city-walls-of-le-malzieu-ville-q3424641.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
