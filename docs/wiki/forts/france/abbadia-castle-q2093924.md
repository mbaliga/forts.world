# Abbadia Castle

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `abbadia-castle-q2093924` |
| Coordinates | 43.37743, -1.74929 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.37743/-1.74929)) |
| Wikidata | [Q2093924](https://www.wikidata.org/wiki/Q2093924) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum\|château\|observatory |
| Administrative area | Hendaye |
| Inception | 1884 |
| Designations | monument historique inscrit\|classified historical monument\|Maisons des Illustres |
| Wikipedia language editions | 17 |
| OSM `historic` | castle |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateau-abbadia.fr/ |

## What the model contains

Tier **T1**, status `outline-only`, 51 elements (outline 1, coastline 1, building 21, road 20, zone 8).

Evidence: documented 0, mapped 51, inferred 0, derived 0; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72062078 historic=castle Q2093924 3 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.37743/-1.74929) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum\|château\|observatory; sitelinks=17; wikidata:Q2093924 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 51 elements); data/traces/abbadia-castle-q2093924.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
