# Brunet Castle

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `brunet-castle-q28163226` |
| Coordinates | -33.02183, -71.56193 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-33.02183/-71.56193)) |
| Wikidata | [Q28163226](https://www.wikidata.org/wiki/Q28163226) (CC0) |
| Wikidata class | castle |
| Types | mansion\|castle\|monument |
| Administrative area | Viña del Mar |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |

## What the model contains

Tier **T1**, status `outline-only`, 103 elements (outline 1, marker 1, waterway 1, road 42, zone 14, water 2, coastline 1, building 39, cliff 2).

Evidence: documented 0, mapped 103, inferred 0, derived 1; heights documented 6, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/377544437 historic=castle Q11697370 302 m from ledger point
- origin moved 300 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":149,"medianInside":8.4,"medianOutside":32.1}
- 67 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-33.02183/-71.56193) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; mansion\|castle\|monument; sitelinks=3; wikidata:Q28163226 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 103 elements); data/traces/brunet-castle-q28163226.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
