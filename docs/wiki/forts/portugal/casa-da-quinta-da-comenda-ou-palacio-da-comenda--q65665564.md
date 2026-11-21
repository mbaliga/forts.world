# Casa da Quinta da Comenda, ou Palácio da Comenda, e respetivo património móvel integrado

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casa-da-quinta-da-comenda-ou-palacio-da-comenda--q65665564` |
| Coordinates | 38.50713, -8.92486 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.50713/-8.92486)) |
| Wikidata | [Q65665564](https://www.wikidata.org/wiki/Q65665564) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|house\|cultural heritage |
| Administrative area | Setubal (São Julião, Nossa Senhora da Anunciada e Santa Maria da Graça) |
| Designations | Pending classification monument |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |

## What the model contains

Tier **T1**, status `outline+walls`, 34 elements (outline 1, coastline 1, waterway 1, road 23, water 2, building 4, wall 1, zone 1).

Evidence: documented 0, mapped 34, inferred 0, derived 1; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/225935566 historic=castle Q65665564 4 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":188,"medianInside":0,"medianOutside":20.6}
- 6 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.50713/-8.92486) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|house\|cultural heritage; sitelinks=2; wikidata:Q65665564 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 34 elements); data/traces/casa-da-quinta-da-comenda-ou-palacio-da-comenda--q65665564.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
