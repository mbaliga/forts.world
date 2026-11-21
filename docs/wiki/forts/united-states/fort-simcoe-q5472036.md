# Fort Simcoe

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-simcoe-q5472036` |
| Coordinates | 46.34139, -120.83611 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/46.34139/-120.83611)) |
| Wikidata | [Q5472036](https://www.wikidata.org/wiki/Q5472036) (CC0) |
| Wikidata class | fort |
| Types | fort\|Washington state park |
| Administrative area | Yakima County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 5 |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, road 5, building 7).

Evidence: documented 0, mapped 13, inferred 0, derived 0; heights documented 0, inferred 0, unknown 7.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/736393450 historic=(none; chosen by its Wikidata id) Q5472036 286 m from ledger point
- origin moved 285 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/46.34139/-120.83611) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Washington state park; sitelinks=5; wikidata:Q5472036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/fort-simcoe-q5472036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 13 elements; outline osm:way/736393450 historic=(none; chosen by its Wikidata id) Q5472036 286 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
