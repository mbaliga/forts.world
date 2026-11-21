# Museu Náutico da Bahia

> Brazil · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `museu-nautico-da-bahia-q56694903` |
| Coordinates | -13.01032, -38.53295 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-13.01032/-38.53295)) |
| Wikidata | [Q56694903](https://www.wikidata.org/wiki/Q56694903) (CC0) |
| Wikidata class | fort |
| Types | fort\|maritime museum |
| Administrative area | Salvador |
| Inception | 1998 |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `website` | https://www.museunauticodabahia.org.br |

## What the model contains

Tier **T1**, status `outline-only`, 51 elements (outline 1, road 20, zone 2, building 19, coastline 3, retaining-wall 5, water 1).

Evidence: documented 0, mapped 51, inferred 0, derived 1; heights documented 11, inferred 0, unknown 13.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/87291138 historic=fort Q56694903 5 m from ledger point
- origin moved 4 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":270,"medianInside":2.7,"medianOutside":8.6}
- 14 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-13.01032/-38.53295) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|maritime museum; sitelinks=1; wikidata:Q56694903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 51 elements); data/traces/museu-nautico-da-bahia-q56694903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/brazil.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
