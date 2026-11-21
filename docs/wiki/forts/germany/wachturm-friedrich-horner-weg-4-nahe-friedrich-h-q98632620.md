# Wachturm Friedrich-Hörner-Weg 4; Nähe Friedrich-Hörner-Weg; Nähe Sterngasse; Spitalgasse 15 in Rothenburg ob der Tauber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-friedrich-horner-weg-4-nahe-friedrich-h-q98632620` |
| Coordinates | 49.37206, 10.18097 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37206/10.18097)) |
| Wikidata | [Q98632620](https://www.wikidata.org/wiki/Q98632620) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Rothenburg ob der Tauber |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 1 |
| OSM `historic` | citywalls |
| OSM `barrier` | city_wall |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 2, road 342, building 122, zone 56, waterway 1, wall 82, retaining-wall 20, water 1).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 43, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/955204142 historic=citywalls 47 m from ledger point
- pruned to the outline plus 150 m: 627 -> 476 elements
- present-day buildings capped: kept the 60 nearest the outline centre of 109 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 80 longest of 255 mapped (trace size budget); minor lanes are not drawn
- origin moved 48 m from the ledger point to the centre of the mapped site
- 31 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37206/10.18097) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q98632620 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 253 elements); data/traces/wachturm-friedrich-horner-weg-4-nahe-friedrich-h-q98632620.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
