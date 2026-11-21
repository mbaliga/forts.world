# Réduit de la pointe d'Arzic

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reduit-de-la-pointe-d-arzic-q22997252` |
| Coordinates | 47.28748, -3.07548 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/47.28748/-3.07548)) |
| Wikidata | [Q22997252](https://www.wikidata.org/wiki/Q22997252) (CC0) |
| Wikidata class | fort |
| Types | fort\|reduit |
| Administrative area | Locmaria |
| Designations | monument historique inscrit |
| Wikipedia language editions | 1 |
| OSM `historic` | fort |
| OSM `heritage` | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 38 elements (outline 1, building 3, road 11, zone 12, coastline 5, cliff 1, waterway 4, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63734609 historic=fort Q22997252 3 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":212,"medianInside":0,"medianOutside":17.4}
- 5 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/47.28748/-3.07548) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|reduit; sitelinks=1; wikidata:Q22997252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 38 elements); data/traces/reduit-de-la-pointe-d-arzic-q22997252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
