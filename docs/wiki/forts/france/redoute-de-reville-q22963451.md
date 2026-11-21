# Redoute de Réville

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `redoute-de-reville-q22963451` |
| Coordinates | 49.60614, -1.22956 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.60614/-1.22956)) |
| Wikidata | [Q22963451](https://www.wikidata.org/wiki/Q22963451) (CC0) |
| Wikidata class | fort |
| Types | redoubt |
| Administrative area | Réville |
| Inception | 1689 |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `heritage` | 3 |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 56 elements (outline 1, marker 3, coastline 1, road 29, building 20, water 1).

Evidence: documented 0, mapped 56, inferred 0, derived 1; heights documented 0, inferred 0, unknown 21.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/697848646 historic=(none; chosen by its Wikidata id) Q22963451 24 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":232,"medianInside":0,"medianOutside":3.3}
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.60614/-1.22956) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt; sitelinks=1; wikidata:Q22963451 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 52 elements); data/traces/redoute-de-reville-q22963451.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 56 elements; outline osm:way/697848646 historic=(none; chosen by its Wikidata id) Q22963451 24 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
