# Hillfort in Sopot

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hillfort-in-sopot-q5610072` |
| Coordinates | 54.45198, 18.56064 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.45198/18.56064)) |
| Wikidata | [Q5610072](https://www.wikidata.org/wiki/Q5610072) (CC0) |
| Wikidata class | fort |
| Types | museum\|hillfort\|open-air museum |
| Administrative area | Sopot |
| Wikipedia language editions | 4 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 333 elements (outline 1, coastline 1, road 176, building 147, zone 2, waterway 2, wall 2, retaining-wall 2).

Evidence: documented 0, mapped 333, inferred 0, derived 0; heights documented 22, inferred 0, unknown 129.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/124789551 historic=yes 417 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 417 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.45198/18.56064) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; museum\|hillfort\|open-air museum; sitelinks=4; wikidata:Q5610072 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 333 elements); data/traces/hillfort-in-sopot-q5610072.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
