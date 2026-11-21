# Yamaguchi Castle

> Japan · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `yamaguchi-castle-q11466729` |
| Coordinates | 35.77778, 139.43519 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/35.77778/139.43519)) |
| Wikidata | [Q11466729](https://www.wikidata.org/wiki/Q11466729) (CC0) |
| Wikidata class | castle |
| Types | Japanese castle |
| Administrative area | Musashi Province |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 199 elements (outline 1, waterway 6, road 71, building 445, zone 1).

Evidence: documented 0, mapped 199, inferred 0, derived 0; heights documented 22, inferred 0, unknown 98.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1494947508 historic=archaeological_site 37 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 445 mapped (trace size budget); the rest of the town is not drawn
- origin moved 35 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/35.77778/139.43519) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; Japanese castle; sitelinks=1; wikidata:Q11466729 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 199 elements); data/traces/yamaguchi-castle-q11466729.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/japan.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
