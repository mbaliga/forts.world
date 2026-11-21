# Palácio dos Duques de Lafões

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-dos-duques-de-lafoes-q74473884` |
| Coordinates | 38.7325, -9.10661 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.7325/-9.10661)) |
| Wikidata | [Q74473884](https://www.wikidata.org/wiki/Q74473884) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Beato |
| Designations | Monument of Public Interest |
| Wikipedia language editions | 8 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Construído em 1760 por D. João Mascarenhas da Silva,segundo Duque de Lafões,ergue-se no Beato,em terrenos do Convento de São Bento de Xabregas.O palácio,de gosto setecentista,localiza-se no interior de uma quinta arborizada,cortada a Norte... |
| OSM `website` | https://palaciogrilo.com/en/ |

## What the model contains

Tier **T1**, status `outline+walls`, 155 elements (outline 1, road 49, retaining-wall 2, building 89, zone 1, wall 11, coastline 1, water 1).

Evidence: documented 0, mapped 155, inferred 0, derived 1; heights documented 0, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3239629 historic=castle Q74473884 4 m from ledger point
- origin moved 2 m from the ledger point to the outline centroid
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":15.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.7325/-9.10661) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=8; wikidata:Q74473884 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 155 elements); data/traces/palacio-dos-duques-de-lafoes-q74473884.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
