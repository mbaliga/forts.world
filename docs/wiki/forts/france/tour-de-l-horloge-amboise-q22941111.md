# Tour de l'Horloge (Amboise)

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tour-de-l-horloge-amboise-q22941111` |
| Coordinates | 47.4126, 0.984 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.4126/0.984)) |
| Wikidata | [Q22941111](https://www.wikidata.org/wiki/Q22941111) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | Amboise |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | stately |
| OSM `heritage` | 2 |
| OSM `website` | https://www.chateau-amboise.com/ |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 4, road 151, building 363, wall 12, waterway 3, zone 22, water 1, cliff 1, retaining-wall 7).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 1, inferred 0, unknown 138.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/176699222 historic=castle Q389908 203 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 363 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 151 mapped (trace size budget); minor lanes are not drawn
- origin moved 202 m from the ledger point to the centre of the mapped site
- 23 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.4126/0.984) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=2; wikidata:Q22941111 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/tour-de-l-horloge-amboise-q22941111.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
