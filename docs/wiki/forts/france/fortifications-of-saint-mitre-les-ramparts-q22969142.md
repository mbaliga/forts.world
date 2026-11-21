# Fortifications of Saint-Mitre-les-Ramparts

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortifications-of-saint-mitre-les-ramparts-q22969142` |
| Coordinates | 43.4529, 5.0132 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.4529/5.0132)) |
| Wikidata | [Q22969142](https://www.wikidata.org/wiki/Q22969142) (CC0) |
| Wikidata class | fort |
| Types | compound (fortification) |
| Administrative area | Saint-Mitre-les-Remparts |
| Designations | monument historique inscrit |
| Wikipedia language editions | 0 |
| OSM `heritage` | 3 |
| OSM `description` | Remparts entourant le vieux Saint Mitre. |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 220 elements (outline 1, marker 4, road 91, building 674, zone 1, wall 2).

Evidence: documented 0, mapped 220, inferred 0, derived 0; heights documented 2, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/419874383 historic=(none; chosen by its Wikidata id) Q22969142 15 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 674 mapped (trace size budget); the rest of the town is not drawn
- origin moved 12 m from the ledger point to the centre of the mapped site
- 2025 DEM cells below -3 m (bathymetry) clamped to -3 m
- 24 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.4529/5.0132) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; compound (fortification); sitelinks=0; wikidata:Q22969142 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 213 elements); data/traces/fortifications-of-saint-mitre-les-ramparts-q22969142.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 220 elements; outline osm:way/419874383 historic=(none; chosen by its Wikidata id) Q22969142 15 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
