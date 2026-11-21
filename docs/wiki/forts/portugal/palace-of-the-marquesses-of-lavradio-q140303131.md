# Palace of the Marquesses of Lavradio

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palace-of-the-marquesses-of-lavradio-q140303131` |
| Coordinates | 38.71645, -9.12459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71645/-9.12459)) |
| Wikidata | [Q140303131](https://www.wikidata.org/wiki/Q140303131) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | São Vicente |
| Inception | 1745 |
| Designations | Under study listing\|Included in protected site |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Em 1745,D. Tomás de Almeida,1º Cardeal Patriarca de Lisboa,em terrenos que adquirira a seu irmão,mandou demolir a residência familiar que neles existia e edificar este palácio ao estilo da época,segundo projecto do arq. João Frederico Ludovice. |

## What the model contains

Tier **T1**, status `outline+walls`, 280 elements (outline 1, road 101, building 279, retaining-wall 6, zone 3, wall 47, coastline 1, waterway 1).

Evidence: documented 0, mapped 280, inferred 0, derived 0; heights documented 75, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/1426801 historic=castle Q140303131 5 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 279 mapped (trace size budget); the rest of the town is not drawn
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71645/-9.12459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q140303131 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 280 elements); data/traces/palace-of-the-marquesses-of-lavradio-q140303131.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
