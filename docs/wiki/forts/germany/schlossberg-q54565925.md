# Schlossberg

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `schlossberg-q54565925` |
| Coordinates | 54.48299, 13.48618 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/54.48299/13.48618)) |
| Wikidata | [Q54565925](https://www.wikidata.org/wiki/Q54565925) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|hill_fort\|hill |
| Administrative area | Ralswiek |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `fortification_type` | hill_fort |

## What the model contains

Tier **T1**, status `outline-only`, 14 elements (outline 1, road 7, coastline 1, zone 3, cliff 1, water 1).

Evidence: documented 0, mapped 14, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1549695533 historic=archaeological_site Q54565925 20 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":250,"medianInside":3,"medianOutside":16.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/54.48299/13.48618) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|hill_fort\|hill; sitelinks=1; wikidata:Q54565925 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 14 elements); data/traces/schlossberg-q54565925.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
