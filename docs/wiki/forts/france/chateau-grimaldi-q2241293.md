# Château Grimaldi

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-grimaldi-q2241293` |
| Coordinates | 43.66722, 7.14583 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.66722/7.14583)) |
| Wikidata | [Q2241293](https://www.wikidata.org/wiki/Q2241293) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Cagnes-sur-Mer |
| Designations | classified historical monument |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.cagnes-sur-mer.fr/culture/chateau-musee-grimaldi/ |

## What the model contains

Tier **T1**, status `outline-only`, 248 elements (outline 1, marker 1, road 124, zone 1, building 787, waterway 1).

Evidence: documented 0, mapped 248, inferred 0, derived 0; heights documented 1, inferred 0, unknown 119.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63886282 historic=castle Q2241293 30 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 787 mapped (trace size budget); the rest of the town is not drawn
- origin moved 31 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.66722/7.14583) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=8; wikidata:Q2241293 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 248 elements); data/traces/chateau-grimaldi-q2241293.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
