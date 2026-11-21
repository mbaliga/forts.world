# Fort de la Briche

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-la-briche-q3078291` |
| Coordinates | 48.9456, 2.34111 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.9456/2.34111)) |
| Wikidata | [Q3078291](https://www.wikidata.org/wiki/Q3078291) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Saint-Denis |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 330 elements (outline 1, road 172, building 194, waterway 3, wall 4, zone 52).

Evidence: documented 0, mapped 330, inferred 0, derived 0; heights documented 3, inferred 0, unknown 121.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/437070061 historic=(none; chosen by its Wikidata id) Q3078291 10 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 194 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 172 mapped (trace size budget); minor lanes are not drawn
- origin moved 4 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.9456/2.34111) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q3078291 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 120 elements); data/traces/fort-de-la-briche-q3078291.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 330 elements; outline osm:way/437070061 historic=(none; chosen by its Wikidata id) Q3078291 10 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
