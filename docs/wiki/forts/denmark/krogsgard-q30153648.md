# Krogsgård

> Denmark · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `krogsgard-q30153648` |
| Coordinates | 55.46369, 8.5637 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.46369/8.5637)) |
| Wikidata | [Q30153648](https://www.wikidata.org/wiki/Q30153648) (CC0) |
| Wikidata class | fortification |
| Types | moat |
| Administrative area | Esbjerg Municipality |
| Designations | protected ancient monument in Denmark |
| Wikipedia language editions | 0 |
| OSM `historic` | manor |
| OSM `website` | https://www.kulturarv.dk/fundogfortidsminder/Lokalitet/117459/ |

## What the model contains

Tier **T1**, status `outline-only`, 40 elements (outline 1, road 15, waterway 11, water 1, building 5, zone 7).

Evidence: documented 0, mapped 40, inferred 0, derived 0; heights documented 0, inferred 0, unknown 5.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/197441810 historic=manor Q30153648 29 m from ledger point
- origin moved 27 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.46369/8.5637) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; moat; sitelinks=0; wikidata:Q30153648 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 32 elements); data/traces/krogsgard-q30153648.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 40 elements; outline osm:way/197441810 historic=manor Q30153648 29 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/denmark.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
