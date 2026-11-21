# Château de Châteaubriant

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chateaubriant-q2968956` |
| Coordinates | 47.72, -1.373 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.72/-1.373)) |
| Wikidata | [Q2968956](https://www.wikidata.org/wiki/Q2968956) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Châteaubriant |
| Designations | classified historical monument |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.grand-patrimoine.loire-atlantique.fr/jcms/les-sites-a-visiter/chateau-de-chateaubriant-fr-eja_77026 |

## What the model contains

Tier **T1**, status `outline+walls`, 331 elements (outline 1, marker 6, road 210, water 1, waterway 16, building 498, wall 32, zone 5).

Evidence: documented 0, mapped 331, inferred 0, derived 0; heights documented 0, inferred 0, unknown 152.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/374504898 historic=castle Q2968956 35 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 498 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 210 mapped (trace size budget); minor lanes are not drawn
- origin moved 35 m from the ledger point to the outline centroid
- 12 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.72/-1.373) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=6; wikidata:Q2968956 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 331 elements); data/traces/chateau-de-chateaubriant-q2968956.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
