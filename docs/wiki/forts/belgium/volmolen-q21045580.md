# Volmolen

> Belgium · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `volmolen-q21045580` |
| Coordinates | 50.86988, 4.69418 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.86988/4.69418)) |
| Wikidata | [Q21045580](https://www.wikidata.org/wiki/Q21045580) (CC0) |
| Wikidata class | fortification |
| Types | water gate\|watermill |
| Administrative area | Leuven |
| Wikipedia language editions | 3 |
| OSM `historic` | citywalls |
| OSM `heritage` | 4 |
| OSM `description` | Sluizencomplex/waterpoort in de omwalling uit 1365. In 1559 werd er een waterrad voor de aandrijving van een molen toegevoegd |
| OSM `website` | https://www.molenechos.org/molen.php?AdvSearch=4129 |

## What the model contains

Tier **T1**, status `outline+walls`, 370 elements (outline 1, road 220, water 2, waterway 19, building 149, zone 15, wall 61, retaining-wall 2).

Evidence: documented 0, mapped 370, inferred 0, derived 0; heights documented 10, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/373730993 historic=citywalls Q21045580 11 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 149 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 220 mapped (trace size budget); minor lanes are not drawn
- origin moved 11 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.86988/4.69418) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; water gate\|watermill; sitelinks=3; wikidata:Q21045580 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 370 elements); data/traces/volmolen-q21045580.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
