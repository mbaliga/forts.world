# Wachturm Kalkturm in Rothenburg ob der Tauber

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `wachturm-kalkturm-in-rothenburg-ob-der-tauber-q98632607` |
| Coordinates | 49.37195, 10.17843 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/49.37195/10.17843)) |
| Wikidata | [Q98632607](https://www.wikidata.org/wiki/Q98632607) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Rothenburg ob der Tauber |
| Designations | architectural heritage monument in Bavaria |
| Wikipedia language editions | 0 |
| OSM `historic` | citywalls |
| OSM `description` | Aborterker (auch: Abtritterker), mittelalterliche Toilette :-) |

## What the model contains

Tier **T1**, status `outline+walls`, 200 elements (outline 1, marker 3, road 298, waterway 5, building 137, zone 39, wall 99, retaining-wall 21).

Evidence: documented 0, mapped 200, inferred 0, derived 0; heights documented 45, inferred 0, unknown 50.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1305250066 historic=citywalls 9 m from ledger point
- pruned to the outline plus 150 m: 603 -> 245 elements
- roads capped: kept the 80 longest of 125 mapped (trace size budget); minor lanes are not drawn
- origin moved 10 m from the ledger point to the centre of the mapped site
- 45 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/49.37195/10.17843) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=0; wikidata:Q98632607 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 200 elements); data/traces/wachturm-kalkturm-in-rothenburg-ob-der-tauber-q98632607.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
