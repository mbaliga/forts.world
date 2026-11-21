# Pentillie

> United Kingdom · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `pentillie-q7165235` |
| Coordinates | 50.4592, -4.24143 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.4592/-4.24143)) |
| Wikidata | [Q7165235](https://www.wikidata.org/wiki/Q7165235) (CC0) |
| Wikidata class | castle |
| Types | castle\|English country house |
| Administrative area | Pillaton |
| Designations | Grade II* listed building |
| Wikipedia language editions | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 13 elements (outline 1, waterway 2, coastline 1, road 8, water 1).

Evidence: documented 0, mapped 13, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/266819299 historic=(none; chosen by its Wikidata id) Q7165235 17 m from ledger point
- origin moved 18 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":25,"medianInside":0.8,"medianOutside":24.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.4592/-4.24143) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|English country house; sitelinks=2; wikidata:Q7165235 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 13 elements); data/traces/pentillie-q7165235.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 13 elements; outline osm:way/266819299 historic=(none; chosen by its Wikidata id) Q7165235 17 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-kingdom.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
