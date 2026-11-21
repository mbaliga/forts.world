# Fortress of Santo Amaro da Barra Grande

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fortress-of-santo-amaro-da-barra-grande-q10283632` |
| Coordinates | -23.99485, -46.30687 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-23.99485/-46.30687)) |
| Wikidata | [Q10283632](https://www.wikidata.org/wiki/Q10283632) (CC0) |
| Wikidata class | fort |
| Types | fortress\|cultural heritage |
| Administrative area | Guarujá |
| Designations | CONDEPHAAT Good Class\|heritage asset listed by IPHAN\|Heritage of Portuguese Influence |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |

## What the model contains

Tier **T1**, status `outline+walls`, 29 elements (outline 1, road 15, coastline 2, waterway 1, building 2, wall 5, zone 2, water 1).

Evidence: documented 0, mapped 29, inferred 0, derived 1; heights documented 1, inferred 0, unknown 6.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/452172394 historic=fort 7 m from ledger point
- origin moved 4 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":125,"medianInside":0,"medianOutside":6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-23.99485/-46.30687) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortress\|cultural heritage; sitelinks=2; wikidata:Q10283632 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 29 elements); data/traces/fortress-of-santo-amaro-da-barra-grande-q10283632.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
