# Château d'Aubais

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-d-aubais-q2968147` |
| Coordinates | 43.7539, 4.1458 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.7539/4.1458)) |
| Wikidata | [Q2968147](https://www.wikidata.org/wiki/Q2968147) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Aubais |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `description` | Aubais comptait déjà un 1er château-fort au 13ème s. Sa tour ronde d'angle fut intégrée dans la composition lors de la reconstruction de l'édifice entre 1680 et 1685. A partir de cette date, la poursuite des travaux fut assurée par un architecte. |
| OSM `website` | https://www.pop.culture.gouv.fr/notice/merimee/PA30000015 |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 6, building 343, road 64, zone 3, retaining-wall 1, waterway 4, wall 1).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 2, inferred 0, unknown 120.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/81584807 historic=castle Q2968147 21 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 343 mapped (trace size budget); the rest of the town is not drawn
- origin moved 22 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.7539/4.1458) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2968147 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/chateau-d-aubais-q2968147.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
