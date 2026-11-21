# Fuerte de San Luis de Alba de Amargos

> Chile · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fuerte-de-san-luis-de-alba-de-amargos-q16569811` |
| Coordinates | -39.8734, -73.42367 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/-39.8734/-73.42367)) |
| Wikidata | [Q16569811](https://www.wikidata.org/wiki/Q16569811) (CC0) |
| Wikidata class | fort |
| Types | fort\|yes\|cultural property |
| Administrative area | Corral |
| Designations | Historical Monument of Chile |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `ruins` | yes |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, coastline 3, road 7, zone 1, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/84880200 historic=fort Q16569811 19 m from ledger point
- origin moved 20 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":340,"medianInside":1.5,"medianOutside":15.2}
- 39 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/-39.8734/-73.42367) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|yes\|cultural property; sitelinks=2; wikidata:Q16569811 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 13 elements); data/traces/fuerte-de-san-luis-de-alba-de-amargos-q16569811.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/chile.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
