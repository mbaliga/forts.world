# Fort Charlotte

> Bahamas · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-charlotte-q5470909` |
| Coordinates | 25.07703, -77.35882 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/25.07703/-77.35882)) |
| Wikidata | [Q5470909](https://www.wikidata.org/wiki/Q5470909) (CC0) |
| Wikidata class | fort |
| Types | fort\|building |
| Administrative area | Nassau |
| Inception | 1789 |
| Wikipedia language editions | 3 |
| OSM `historic` | fort |
| OSM `description` | Built in 1788 by Lord Dunmore, the fort was named after the wife of King George III, Queen Saharia Charlotte. The fort has a moat, dungeons, underground passageways, and 42 cannons, which have never been fired in an act of aggression. |

## What the model contains

Tier **T1**, status `outline+walls`, 118 elements (outline 1, road 56, zone 3, waterway 1, building 53, water 1, wall 2, coastline 1).

Evidence: documented 0, mapped 118, inferred 0, derived 0; heights documented 5, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302015352 historic=fort Q5470909 30 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 32 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/25.07703/-77.35882) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|building; sitelinks=3; wikidata:Q5470909 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 118 elements); data/traces/fort-charlotte-q5470909.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bahamas.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
