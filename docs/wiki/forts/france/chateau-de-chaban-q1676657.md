# Château de Chaban

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `chateau-de-chaban-q1676657` |
| Coordinates | 45.01361, 1.06028 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.01361/1.06028)) |
| Wikidata | [Q1676657](https://www.wikidata.org/wiki/Q1676657) (CC0) |
| Wikidata class | castle |
| Types | castle\|château |
| Administrative area | Saint-Léon-sur-Vézère |
| Designations | monument historique inscrit |
| Wikipedia language editions | 6 |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 30 elements (outline 1, marker 1, road 15, zone 9, building 4).

Evidence: documented 0, mapped 30, inferred 0, derived 0; heights documented 0, inferred 0, unknown 4.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/484098021 historic=(none; chosen by its Wikidata id) Q1676657 45 m from ledger point
- origin moved 44 m from the ledger point to the centre of the mapped site
- 1681 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.01361/1.06028) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|château; sitelinks=6; wikidata:Q1676657 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 30 elements); data/traces/chateau-de-chaban-q1676657.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 30 elements; outline osm:way/484098021 historic=(none; chosen by its Wikidata id) Q1676657 45 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
