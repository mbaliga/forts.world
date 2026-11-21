# Castle of Miranda do Douro

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-miranda-do-douro-q3817607` |
| Coordinates | 41.49656, -6.27517 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.49656/-6.27517)) |
| Wikidata | [Q3817607](https://www.wikidata.org/wiki/Q3817607) (CC0) |
| Wikidata class | castle |
| Types | castle\|cultural heritage |
| Administrative area | Miranda do Douro |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 6 |
| OSM `historic` | building |
| OSM `heritage` | https://servicos.dgpc.gov.pt/pesquisapatrimonioimovel/detalhes.php?code=72283 |
| OSM `description` | Edifício no Gaveto da Rua da Costanilha com a Rua do Abade de Baçal |
| OSM `website` | https://www.allaboutportugal.pt/es/miranda-do-douro/monumentos/casa-de-ls-cachorros-zambargonhados |

## What the model contains

Tier **T1**, status `outline+walls`, 303 elements (outline 1, marker 4, road 100, building 333, waterway 1, wall 39, zone 14, retaining-wall 24).

Evidence: documented 0, mapped 303, inferred 0, derived 0; heights documented 0, inferred 0, unknown 183.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/455103042 historic=building Q96243022 269 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 333 mapped (trace size budget); the rest of the town is not drawn
- origin moved 270 m from the ledger point to the outline centroid
- 8 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.49656/-6.27517) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|cultural heritage; sitelinks=6; wikidata:Q3817607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 303 elements); data/traces/castle-of-miranda-do-douro-q3817607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
