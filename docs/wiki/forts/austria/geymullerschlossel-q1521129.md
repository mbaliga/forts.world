# Geymüllerschlössel

> Austria · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `geymullerschlossel-q1521129` |
| Coordinates | 48.24378, 16.30732 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.24378/16.30732)) |
| Wikidata | [Q1521129](https://www.wikidata.org/wiki/Q1521129) (CC0) |
| Wikidata class | castle |
| Types | castle\|stately\|villa\|art museum |
| Administrative area | Vienna |
| Inception | 1808 |
| Designations | Listed objects in Austria |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `description` | "Summer building" for Viennese merchant/banker Johan Geymüller, furnished with original furniture from the first half of the C19th. (Source: operator website) |
| OSM `website` | https://www.mak.at/weiterestandorte |

## What the model contains

Tier **T1**, status `outline+walls`, 284 elements (outline 1, marker 1, road 145, zone 3, building 130, water 1, wall 3).

Evidence: documented 0, mapped 284, inferred 0, derived 0; heights documented 2, inferred 0, unknown 131.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/144441152 historic=castle Q1521129 4 m from ledger point
- origin moved 3 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.24378/16.30732) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|stately\|villa\|art museum; sitelinks=4; wikidata:Q1521129 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 284 elements); data/traces/geymullerschlossel-q1521129.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/austria.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
