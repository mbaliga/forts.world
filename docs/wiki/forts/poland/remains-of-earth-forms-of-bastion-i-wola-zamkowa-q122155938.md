# Remains of earth forms of Bastion I, Wola Zamkowa 8-10 in Torun

> Poland · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `remains-of-earth-forms-of-bastion-i-wola-zamkowa-q122155938` |
| Coordinates | 53.01002, 18.61418 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.01002/18.61418)) |
| Wikidata | [Q122155938](https://www.wikidata.org/wiki/Q122155938) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Toruń |
| Designations | immovable monument in Poland |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `ruins` | yes |
| OSM `website` | https://www.tak.torun.pl/en/castle/ |

## What the model contains

Tier **T1**, status `outline+walls`, 325 elements (outline 1, marker 3, road 553, wall 69, building 239, zone 130, waterway 11, retaining-wall 1).

Evidence: documented 0, mapped 325, inferred 0, derived 0; heights documented 21, inferred 0, unknown 102.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/80579965 historic=castle Q9386586 250 m from ledger point
- pruned to the outline plus 150 m: 1007 -> 699 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 126 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 388 mapped (trace size budget); minor lanes are not drawn
- origin moved 251 m from the ledger point to the outline centroid
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.01002/18.61418) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=0; wikidata:Q122155938 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 325 elements); data/traces/remains-of-earth-forms-of-bastion-i-wola-zamkowa-q122155938.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/poland.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
