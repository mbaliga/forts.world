# Hazlewood Castle

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `hazlewood-castle-q5688340` |
| Coordinates | 53.8523, -1.3192 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/53.8523/-1.3192)) |
| Wikidata | [Q5688340](https://www.wikidata.org/wiki/Q5688340) (CC0) |
| Wikidata class | fort |
| Types | English country house\|fortified manor house\|country house hotel |
| Administrative area | Stutton with Hazlewood |
| Designations | Grade I listed building |
| Wikipedia language editions | 6 |
| OSM `website` | https://www.hazlewood-castle.co.uk/ |

## What the model contains

Tier **T1**, status `outline+walls`, 27 elements (outline 1, road 19, zone 4, building 2, wall 1).

Evidence: documented 0, mapped 27, inferred 0, derived 0; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/329021982 historic=(none; chosen by its Wikidata id) Q5688340 9 m from ledger point
- origin moved 8 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/53.8523/-1.3192) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; English country house\|fortified manor house\|country house hotel; sitelinks=6; wikidata:Q5688340 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 28 elements); data/traces/hazlewood-castle-q5688340.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 27 elements; outline osm:way/329021982 historic=(none; chosen by its Wikidata id) Q5688340 9 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
