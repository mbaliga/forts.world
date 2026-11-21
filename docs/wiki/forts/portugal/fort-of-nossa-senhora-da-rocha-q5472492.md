# Fort of Nossa Senhora da Rocha

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-of-nossa-senhora-da-rocha-q5472492` |
| Coordinates | 37.09565, -8.38618 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.09565/-8.38618)) |
| Wikidata | [Q5472492](https://www.wikidata.org/wiki/Q5472492) (CC0) |
| Wikidata class | fort |
| Types | cultural heritage\|fort |
| Administrative area | Porches |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 4 |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 43 elements (outline 1, road 17, retaining-wall 2, building 9, cliff 3, zone 3, wall 5, pit 1, coastline 1, water 1).

Evidence: documented 0, mapped 43, inferred 0, derived 1; heights documented 0, inferred 0, unknown 16.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/157926593 historic=(none; chosen by its Wikidata id) Q5472492 38 m from ledger point
- origin moved 39 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":262,"medianInside":0,"medianOutside":15.6}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.09565/-8.38618) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; cultural heritage\|fort; sitelinks=4; wikidata:Q5472492 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 35 elements); data/traces/fort-of-nossa-senhora-da-rocha-q5472492.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 43 elements; outline osm:way/157926593 historic=(none; chosen by its Wikidata id) Q5472492 38 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
