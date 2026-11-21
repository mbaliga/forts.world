# Kozograd

> Bosnia & Herzegovina · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kozograd-q25554880` |
| Coordinates | 43.93475, 17.8987 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.93475/17.8987)) |
| Wikidata | [Q25554880](https://www.wikidata.org/wiki/Q25554880) (CC0) |
| Wikidata class | ruin |
| Types | heritage site\|castle ruin |
| Administrative area | Central Bosnia Canton |
| Designations | National Monuments of Bosnia and Herzegovina |
| Wikipedia language editions | 4 |
| OSM `historic` | heritage |
| OSM `castle_type` | fortress |
| OSM `fortification_type` | castle |
| OSM `heritage` | 2 |
| OSM `ruins` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 6 elements (outline 1, zone 3, road 2).

Evidence: documented 0, mapped 6, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/997953934 historic=heritage Q25554880 74 m from ledger point
- origin moved 73 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.93475/17.8987) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; heritage site\|castle ruin; sitelinks=4; wikidata:Q25554880 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 4 elements); data/traces/kozograd-q25554880.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 6 elements; outline osm:way/997953934 historic=heritage Q25554880 74 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/bosnia-herzegovina.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
