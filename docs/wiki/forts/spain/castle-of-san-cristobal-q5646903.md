# Castle of San Cristóbal

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castle-of-san-cristobal-q5646903` |
| Coordinates | 28.08243, -15.41521 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/28.08243/-15.41521)) |
| Wikidata | [Q5646903](https://www.wikidata.org/wiki/Q5646903) (CC0) |
| Wikidata class | castle |
| Types | castle\|monument |
| Administrative area | Las Palmas de Gran Canaria |
| Inception | 1577 |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline+walls`, 116 elements (outline 1, road 66, building 31, wall 14, coastline 3, water 1).

Evidence: documented 0, mapped 116, inferred 0, derived 1; heights documented 0, inferred 0, unknown 45.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/126808549 historic=(none; chosen by its Wikidata id) Q5646903 1 m from ledger point
- origin moved 1 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":257,"medianInside":0,"medianOutside":14.8}
- 1 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/28.08243/-15.41521) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|monument; sitelinks=3; wikidata:Q5646903 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 116 elements); data/traces/castle-of-san-cristobal-q5646903.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 116 elements; outline osm:way/126808549 historic=(none; chosen by its Wikidata id) Q5646903 1 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
