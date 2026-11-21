# château de Jeumont

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-jeumont-q22979727` |
| Coordinates | 50.29461, 4.10498 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.29461/4.10498)) |
| Wikidata | [Q22979727](https://www.wikidata.org/wiki/Q22979727) (CC0) |
| Wikidata class | ruin |
| Types | ruins\|château |
| Administrative area | Jeumont |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `historic` | ruins |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 178 elements (outline 1, road 55, building 456, zone 2).

Evidence: documented 0, mapped 178, inferred 0, derived 0; heights documented 0, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/39633478 historic=ruins Q22979727 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 456 mapped (trace size budget); the rest of the town is not drawn
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.29461/4.10498) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; ruins\|château; sitelinks=0; wikidata:Q22979727 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 178 elements); data/traces/chateau-de-jeumont-q22979727.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
