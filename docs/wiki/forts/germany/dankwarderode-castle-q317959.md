# Dankwarderode Castle

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `dankwarderode-castle-q317959` |
| Coordinates | 52.2647, 10.5242 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.2647/10.5242)) |
| Wikidata | [Q317959](https://www.wikidata.org/wiki/Q317959) (CC0) |
| Wikidata class | castle |
| Types | castle\|museum |
| Administrative area | Innenstadt |
| Inception | 1200 |
| Designations | architectural heritage monument |
| Wikipedia language editions | 7 |
| OSM `historic` | castle |
| OSM `castle_type` | defensive |
| OSM `heritage` | 4 |
| OSM `website` | https://3landesmuseen-braunschweig.de/herzog-anton-ulrich-museum/ausstellungen/dauerausstellungen/mittelalter |

## What the model contains

Tier **T1**, status `outline+walls`, 321 elements (outline 1, marker 29, road 301, building 242, wall 10, zone 6, water 1, waterway 4).

Evidence: documented 0, mapped 321, inferred 0, derived 0; heights documented 82, inferred 0, unknown 48.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/243689993 historic=castle Q317959 4 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 242 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 301 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the outline centroid

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.2647/10.5242) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|museum; sitelinks=7; wikidata:Q317959 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 321 elements); data/traces/dankwarderode-castle-q317959.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
