# Torre Guinarda

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-guinarda-q43122746` |
| Coordinates | 41.97817, 3.02764 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/41.97817/3.02764)) |
| Wikidata | [Q43122746](https://www.wikidata.org/wiki/Q43122746) (CC0) |
| Wikidata class | fort |
| Types | fortified house |
| Administrative area | Corçà |
| Inception | 1500 |
| Designations | Cultural Asset of National Interest\|bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `heritage` | https://invarquit.cultura.gencat.cat/card/790 |

## What the model contains

Tier **T1**, status `outline-only`, 24 elements (outline 1, waterway 2, building 5, road 11, zone 5).

Evidence: documented 0, mapped 24, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/912165372 historic=(none; chosen by its Wikidata id) Q43122746 2 m from ledger point
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/41.97817/3.02764) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified house; sitelinks=1; wikidata:Q43122746 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 24 elements); data/traces/torre-guinarda-q43122746.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 24 elements; outline osm:way/912165372 historic=(none; chosen by its Wikidata id) Q43122746 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
