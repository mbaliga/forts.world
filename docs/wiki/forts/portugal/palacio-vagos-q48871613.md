# Palácio Vagos

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-vagos-q48871613` |
| Coordinates | 38.71247, -9.13558 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71247/-9.13558)) |
| Wikidata | [Q48871613](https://www.wikidata.org/wiki/Q48871613) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|building |
| Administrative area | Lisbon |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Formado por arquitectura nobre e religiosa, este conjunto, atesta bem a importância que o local teve desde a idade média até à reforma pombalina.Aqui habitou D. Leonor,filha de D. Duarte,a partir de 1451,após aí ter celebrado o seu casamento... |

## What the model contains

Tier **T1**, status `outline+walls`, 326 elements (outline 1, marker 13, road 286, wall 14, building 377, retaining-wall 18, zone 8, coastline 1, water 1).

Evidence: documented 0, mapped 326, inferred 0, derived 0; heights documented 80, inferred 0, unknown 72.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/18216967 historic=castle Q48871613 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 377 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 286 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71247/-9.13558) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|building; sitelinks=2; wikidata:Q48871613 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 326 elements); data/traces/palacio-vagos-q48871613.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
