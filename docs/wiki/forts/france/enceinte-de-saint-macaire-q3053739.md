# Enceinte de Saint-Macaire

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `enceinte-de-saint-macaire-q3053739` |
| Coordinates | 44.5659, -0.2225 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.5659/-0.2225)) |
| Wikidata | [Q3053739](https://www.wikidata.org/wiki/Q3053739) (CC0) |
| Wikidata class | fortification |
| Types | city walls |
| Administrative area | Saint-Macaire |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | building |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 216 elements (outline 1, marker 7, waterway 2, road 71, wall 13, building 367, water 2).

Evidence: documented 0, mapped 216, inferred 0, derived 0; heights documented 3, inferred 0, unknown 130.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/99046482 historic=building Q2970756 234 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 367 mapped (trace size budget); the rest of the town is not drawn
- origin moved 233 m from the ledger point to the centre of the mapped site
- 27 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.5659/-0.2225) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; city walls; sitelinks=2; wikidata:Q3053739 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 216 elements); data/traces/enceinte-de-saint-macaire-q3053739.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
