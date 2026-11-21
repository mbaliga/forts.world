# Leucarum

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `leucarum-q6533992` |
| Coordinates | 51.66223, -4.07832 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/51.66223/-4.07832)) |
| Wikidata | [Q6533992](https://www.wikidata.org/wiki/Q6533992) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|castrum\|archaeological site\|ancient Roman structure |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |

## What the model contains

Tier **T1**, status `outline-only`, 106 elements (outline 1, coastline 2, road 48, zone 1, building 50, waterway 2, water 2).

Evidence: documented 0, mapped 106, inferred 0, derived 2; heights documented 30, inferred 0, unknown 20.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/963199077 historic=archaeological_site Q6533992 36 m from ledger point
- origin moved 32 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":99,"medianInside":3.7,"medianOutside":7.1}
- sea-1: DEM check ok {"cells":42,"medianInside":2.7,"medianOutside":6.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/51.66223/-4.07832) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|castrum\|archaeological site\|ancient Roman structure; sitelinks=1; wikidata:Q6533992 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 106 elements); data/traces/leucarum-q6533992.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
