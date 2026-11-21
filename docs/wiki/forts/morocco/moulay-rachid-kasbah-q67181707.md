# Moulay Rachid Kasbah

> Morocco · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `moulay-rachid-kasbah-q67181707` |
| Coordinates | 34.02976, -6.83874 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/34.02976/-6.83874)) |
| Wikidata | [Q67181707](https://www.wikidata.org/wiki/Q67181707) (CC0) |
| Wikidata class | castle |
| Types | kasbah |
| Administrative area | Rabat |
| Designations | Moroccan cultural heritage\|part of UNESCO World Heritage Site |
| Wikipedia language editions | 0 |
| OSM `historic` | tomb |

## What the model contains

Tier **T1**, status `outline+walls`, 327 elements (outline 1, marker 14, road 250, zone 30, coastline 3, wall 9, building 216).

Evidence: documented 0, mapped 327, inferred 0, derived 0; heights documented 18, inferred 0, unknown 111.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/754399830 historic=tomb 147 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 216 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 250 mapped (trace size budget); minor lanes are not drawn
- origin moved 147 m from the ledger point to the centre of the mapped site
- 46 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/34.02976/-6.83874) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; kasbah; sitelinks=0; wikidata:Q67181707 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 327 elements); data/traces/moulay-rachid-kasbah-q67181707.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/morocco.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
