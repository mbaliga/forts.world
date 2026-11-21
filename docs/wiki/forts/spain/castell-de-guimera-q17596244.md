# Castell de Guimerà

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castell-de-guimera-q17596244` |
| Coordinates | 41.56517, 1.18603 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.56517/1.18603)) |
| Wikidata | [Q17596244](https://www.wikidata.org/wiki/Q17596244) (CC0) |
| Wikidata class | castle |
| Types | castle\|fortress\|castle |
| Administrative area | Guimerà |
| Inception | 1988- |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | El castell de Guimerà està situat estratègicament en el límit entre l'altiplà i la carena de la vall del Corb, construït sobre un pla de roca viva, on s'estenen avui les restes del recinte medieval, ampliat en diverses fases fins a l'extrem de ponent, i r |

## What the model contains

Tier **T1**, status `outline+walls`, 279 elements (outline 1, marker 4, road 148, waterway 1, building 326, wall 2, retaining-wall 1, zone 2).

Evidence: documented 0, mapped 279, inferred 0, derived 0; heights documented 120, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/165024131 historic=castle Q17596244 5 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- origin moved 6 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.56517/1.18603) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|fortress\|castle; sitelinks=2; wikidata:Q17596244 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 279 elements); data/traces/castell-de-guimera-q17596244.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
