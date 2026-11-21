# Fortín de la Natividad

> Panama · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortin-de-la-natividad-q42886002` |
| Coordinates | 9.00371, -79.49434 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/9.00371/-79.49434)) |
| Wikidata | [Q42886002](https://www.wikidata.org/wiki/Q42886002) (CC0) |
| Wikidata class | fort |
| Types | cultural property\|fortress |
| Administrative area | Panamá Province |
| Designations | monument of Panama |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 87 elements (outline 1, road 59, zone 1, building 16, waterway 5, coastline 2, wall 2, water 1).

Evidence: documented 0, mapped 87, inferred 0, derived 1; heights documented 5, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/669457322 historic=fort Q42886002 4 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":120,"medianInside":0,"medianOutside":9}
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/9.00371/-79.49434) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural property\|fortress; sitelinks=1; wikidata:Q42886002 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 87 elements); data/traces/fortin-de-la-natividad-q42886002.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/panama.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
