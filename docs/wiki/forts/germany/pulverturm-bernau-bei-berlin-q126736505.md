# Pulverturm (Bernau bei Berlin)

> Germany · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pulverturm-bernau-bei-berlin-q126736505` |
| Coordinates | 52.67881, 13.58459 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/52.67881/13.58459)) |
| Wikidata | [Q126736505](https://www.wikidata.org/wiki/Q126736505) (CC0) |
| Wikidata class | fort |
| Types | tower\|fortified tower |
| Administrative area | Bernau bei Berlin |
| Inception | 1500 |
| Designations | partial heritage site |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 253 elements (outline 1, marker 8, road 123, waterway 4, building 111, wall 4, zone 2).

Evidence: documented 0, mapped 253, inferred 0, derived 0; heights documented 25, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/43395415 historic=yes Q126736505 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/52.67881/13.58459) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; tower\|fortified tower; sitelinks=1; wikidata:Q126736505 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 314 elements); data/traces/pulverturm-bernau-bei-berlin-q126736505.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 253 elements; outline osm:way/43395415 historic=yes Q126736505 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/germany.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
