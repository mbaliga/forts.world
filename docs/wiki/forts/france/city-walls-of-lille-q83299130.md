# city walls of Lille

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `city-walls-of-lille-q83299130` |
| Coordinates | 50.63194, 3.0575 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.63194/3.0575)) |
| Wikidata | [Q83299130](https://www.wikidata.org/wiki/Q83299130) (CC0) |
| Wikidata class | fortification |
| Types | enceinte |
| Administrative area | Lille |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Palais Rihour (vestiges : salle du conclave près de l'ancien Hôtel de Ville) : classement par liste de 1875 |

## What the model contains

Tier **T1**, status `outline+walls`, 232 elements (outline 1, marker 2, road 98, building 362, zone 6, water 1, waterway 1, wall 3).

Evidence: documented 0, mapped 232, inferred 0, derived 0; heights documented 27, inferred 0, unknown 96.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/37545143 historic=castle Q3360910 507 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 362 mapped (trace size budget); the rest of the town is not drawn
- origin moved 508 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.63194/3.0575) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; enceinte; sitelinks=2; wikidata:Q83299130 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 232 elements); data/traces/city-walls-of-lille-q83299130.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
