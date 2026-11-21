# Ditchan Kala

> Uzbekistan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ditchan-kala-q12821481` |
| Coordinates | 41.38472, 60.35361 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.38472/60.35361)) |
| Wikidata | [Q12821481](https://www.wikidata.org/wiki/Q12821481) (CC0) |
| Wikidata class | fort |
| Types | fortress\|neighborhood |
| Administrative area | Khiva |
| Wikipedia language editions | 6 |
| OSM `historic` | castle |
| OSM `heritage` | https://whc.unesco.org/en/list/543 |

## What the model contains

Tier **T1**, status `outline+walls`, 125 elements (outline 1, marker 3, road 66, wall 6, building 37, zone 7, water 2, waterway 3).

Evidence: documented 0, mapped 125, inferred 0, derived 0; heights documented 15, inferred 0, unknown 28.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/185036984 historic=castle Q535577 871 m from ledger point
- origin moved 870 m from the ledger point to the outline centroid
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.38472/60.35361) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|neighborhood; sitelinks=6; wikidata:Q12821481 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 125 elements); data/traces/ditchan-kala-q12821481.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/uzbekistan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
