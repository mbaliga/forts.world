# Casale Vascello

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `casale-vascello-q113589977` |
| Coordinates | 40.76257, 14.03199 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.76257/14.03199)) |
| Wikidata | [Q113589977](https://www.wikidata.org/wiki/Q113589977) (CC0) |
| Wikidata class | fort |
| Types | fortified town |
| Administrative area | Procida |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | yes |
| OSM `website` | https://www.comune.procida.na.it/sito/luogo/349662-palazzo-davalos |

## What the model contains

Tier **T1**, status `outline+walls`, 178 elements (outline 1, road 77, cliff 3, building 64, wall 13, zone 6, coastline 1, retaining-wall 12, water 1).

Evidence: documented 0, mapped 178, inferred 0, derived 1; heights documented 5, inferred 0, unknown 84.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/302047675 historic=yes Q113445291 301 m from ledger point
- origin moved 299 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":168,"medianInside":0,"medianOutside":38.6}
- 46 DEM cells below -3 m (bathymetry) clamped to -3 m
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.76257/14.03199) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified town; sitelinks=0; wikidata:Q113589977 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 178 elements); data/traces/casale-vascello-q113589977.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
