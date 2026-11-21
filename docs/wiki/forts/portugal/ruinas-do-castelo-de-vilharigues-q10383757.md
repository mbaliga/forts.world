# Ruínas do Castelo de Vilharigues

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `ruinas-do-castelo-de-vilharigues-q10383757` |
| Coordinates | 40.71552, -8.12951 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/40.71552/-8.12951)) |
| Wikidata | [Q10383757](https://www.wikidata.org/wiki/Q10383757) (CC0) |
| Wikidata class | castle |
| Types | tower\|castle\|cultural heritage |
| Administrative area | Vouzela e Paços de Vilharigues |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline-only`, 20 elements (outline 1, road 16, building 1, retaining-wall 1, zone 1).

Evidence: documented 0, mapped 20, inferred 0, derived 0; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/678971307 historic=tower Q10383757 8 m from ledger point
- origin moved 9 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/40.71552/-8.12951) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; tower\|castle\|cultural heritage; sitelinks=3; wikidata:Q10383757 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 20 elements); data/traces/ruinas-do-castelo-de-vilharigues-q10383757.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 20 elements; outline osm:way/678971307 historic=tower Q10383757 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
