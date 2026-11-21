# Palácio do Marquês de Angeja

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-do-marques-de-angeja-q10344079` |
| Coordinates | 38.69724, -9.19539 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69724/-9.19539)) |
| Wikidata | [Q10344079](https://www.wikidata.org/wiki/Q10344079) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Belém |
| Designations | heritage without legal protection |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | Erguido em Setecentos por D. Pedro António de Noronha e Albuquerque,1º Marquês de Angeja,em terrenos doados por D. João V,este palácio assenta a sua parte mais recuada sobre restos da estrutura do antigo Forte de S. João.Após o terramoto de 1755... |

## What the model contains

Tier **T1**, status `outline+walls`, 255 elements (outline 1, road 101, building 125, coastline 1, retaining-wall 2, wall 18, zone 6, water 1).

Evidence: documented 0, mapped 255, inferred 0, derived 1; heights documented 48, inferred 0, unknown 97.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/8329126 historic=castle Q10344079 10 m from ledger point
- origin moved 6 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":10,"medianInside":0.3,"medianOutside":13.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69724/-9.19539) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q10344079 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 255 elements); data/traces/palacio-do-marques-de-angeja-q10344079.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
