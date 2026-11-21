# Crown Redoubt

> Sweden · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `crown-redoubt-q1570303` |
| Coordinates | 57.69602, 11.95532 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/57.69602/11.95532)) |
| Wikidata | [Q1570303](https://www.wikidata.org/wiki/Q1570303) (CC0) |
| Wikidata class | fort |
| Types | redoubt\|sconce\|heritage site in Sweden |
| Administrative area | Gothenburg Municipality |
| Inception | 1700 |
| Designations | governmental listed building complex\|monument in Fornminnesregistret |
| Wikipedia language editions | 8 |
| OSM `historic` | tower |
| OSM `heritage` | yes |

## What the model contains

Tier **T1**, status `outline+walls`, 365 elements (outline 1, marker 6, road 392, building 137, zone 50, wall 12, retaining-wall 21, cliff 5).

Evidence: documented 0, mapped 365, inferred 0, derived 0; heights documented 45, inferred 0, unknown 108.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/32871212 historic=tower Q1570303 2 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 137 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 392 mapped (trace size budget); minor lanes are not drawn

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/57.69602/11.95532) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; redoubt\|sconce\|heritage site in Sweden; sitelinks=8; wikidata:Q1570303 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 364 elements); data/traces/crown-redoubt-q1570303.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 365 elements; outline osm:way/32871212 historic=tower Q1570303 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/sweden.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
