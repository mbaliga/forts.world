# Fort Sumter

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-sumter-q737517` |
| Coordinates | 32.7525, -79.87444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.7525/-79.87444)) |
| Wikidata | [Q737517](https://www.wikidata.org/wiki/Q737517) (CC0) |
| Wikidata class | fort |
| Types | sea fort\|Passport to Your National Parks cancellation location |
| Administrative area | Charleston |
| Inception | 1811 |
| Designations | National Register of Historic Places contributing property |
| Wikipedia language editions | 36 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 60 elements (outline 1, marker 37, coastline 1, building 1, road 18, zone 1, wall 1).

Evidence: documented 0, mapped 60, inferred 0, derived 0; heights documented 2, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/19947925 historic=fort Q737517 34 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 41 m from the ledger point to the outline centroid
- 5 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.7525/-79.87444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; sea fort\|Passport to Your National Parks cancellation location; sitelinks=36; wikidata:Q737517 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 60 elements); data/traces/fort-sumter-q737517.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
