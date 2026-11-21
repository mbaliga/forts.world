# Església de Sant Miquel Arcàngel de Murla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `esglesia-de-sant-miquel-arcangel-de-murla-q43157063` |
| Coordinates | 38.75944, -0.08335 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.75944/-0.08335)) |
| Wikidata | [Q43157063](https://www.wikidata.org/wiki/Q43157063) (CC0) |
| Wikidata class | fort |
| Types | fortified church |
| Administrative area | Murla |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | church |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 262 elements (outline 1, road 54, waterway 1, building 309, wall 78, water 4, zone 4).

Evidence: documented 0, mapped 262, inferred 0, derived 0; heights documented 1, inferred 0, unknown 197.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/234127577 historic=church Q43157063 7 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 309 mapped (trace size budget); the rest of the town is not drawn
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.75944/-0.08335) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified church; sitelinks=3; wikidata:Q43157063 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 255 elements); data/traces/esglesia-de-sant-miquel-arcangel-de-murla-q43157063.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 262 elements; outline osm:way/234127577 historic=church Q43157063 7 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
