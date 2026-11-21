# Lindwurm Tunnel

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `lindwurm-tunnel-q109810511` |
| Coordinates | 48.13115, 11.56191 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.13115/11.56191)) |
| Wikidata | [Q109810511](https://www.wikidata.org/wiki/Q109810511) (CC0) |
| Wikidata class | fortification |
| Types | railway tunnel\|air-raid shelter\|metro tunnel |
| Administrative area | Munich |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `heritage` | 4 |
| OSM `description` | Historischer Friedhof von europäischem Rang mit zahlreichen kunstgeschichtlich bedeutsamen Grabmälern berühmter Persönlichkeiten. 1563 angelegt, ab 1789 Zentralfriedhof Münchens, seit 1943 keine Bestattungen mehr. |
| OSM `website` | https://stadt.muenchen.de/service/info/alter-sudlicher-friedhof/10321277/ |

## What the model contains

Tier **T1**, status `outline+walls`, 341 elements (outline 1, marker 16, road 488, wall 46, building 684, waterway 2, zone 5, water 1).

Evidence: documented 0, mapped 341, inferred 0, derived 0; heights documented 29, inferred 0, unknown 137.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/160225878 historic=yes Q438199 443 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 684 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 488 mapped (trace size budget); minor lanes are not drawn
- origin moved 441 m from the ledger point to the centre of the mapped site
- 2 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.13115/11.56191) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; railway tunnel\|air-raid shelter\|metro tunnel; sitelinks=1; wikidata:Q109810511 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 341 elements); data/traces/lindwurm-tunnel-q109810511.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
