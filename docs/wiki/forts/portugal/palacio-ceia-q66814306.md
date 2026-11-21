# Palácio Ceia

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-ceia-q66814306` |
| Coordinates | 38.71807, -9.1524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71807/-9.1524)) |
| Wikidata | [Q66814306](https://www.wikidata.org/wiki/Q66814306) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santo António |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 1 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `heritage` | 2 |
| OSM `description` | Edificado na 2ª metade do séc. XVIII,(1760/61),pelo comerciante Rebelo de Andrade,manteve-se na sua família até 1805.Após esta data teve vários proprietários,entre os quais os condes de Ceia e D. Vasco Sequeira Bramão... |

## What the model contains

Tier **T1**, status `outline+walls`, 294 elements (outline 1, marker 1, road 140, waterway 3, building 326, wall 23, zone 4, retaining-wall 2).

Evidence: documented 0, mapped 294, inferred 0, derived 0; heights documented 41, inferred 0, unknown 104.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/100609490 historic=castle Q66814306 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 326 mapped (trace size budget); the rest of the town is not drawn
- origin moved 8 m from the ledger point to the centre of the mapped site
- 9 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71807/-9.1524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=1; wikidata:Q66814306 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 294 elements); data/traces/palacio-ceia-q66814306.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
