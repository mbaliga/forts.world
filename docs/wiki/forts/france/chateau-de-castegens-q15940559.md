# Château de Castegens

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-castegens-q15940559` |
| Coordinates | 44.8755, -0.02312 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.8755/-0.02312)) |
| Wikidata | [Q15940559](https://www.wikidata.org/wiki/Q15940559) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Belvès-de-Castillon |
| Designations | monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | manor |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 22 elements (outline 1, road 10, building 10, waterway 1).

Evidence: documented 0, mapped 22, inferred 0, derived 0; heights documented 0, inferred 0, unknown 10.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/321192635 historic=manor Q15940559 25 m from ledger point
- origin moved 24 m from the ledger point to the centre of the mapped site
- 574 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.8755/-0.02312) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=2; wikidata:Q15940559 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 22 elements); data/traces/chateau-de-castegens-q15940559.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 22 elements; outline osm:way/321192635 historic=manor Q15940559 25 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
