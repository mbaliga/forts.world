# San Esteban de Deyo

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `san-esteban-de-deyo-q3571711` |
| Coordinates | 42.63389, -2.10639 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/42.63389/-2.10639)) |
| Wikidata | [Q3571711](https://www.wikidata.org/wiki/Q3571711) (CC0) |
| Wikidata class | castle |
| Types | castle\|building\|monument |
| Administrative area | Villamayor de Monjardín |
| Designations | bien de interés cultural |
| Wikipedia language editions | 7 |

## What the model contains

Tier **T1**, status `outline+walls`, 15 elements (outline 1, marker 1, zone 1, road 11, wall 1).

Evidence: documented 0, mapped 15, inferred 0, derived 0; heights documented 0, inferred 0, unknown 1.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/368847545 historic=(none; chosen by its Wikidata id) Q3571711 20 m from ledger point
- origin moved 21 m from the ledger point to the centre of the mapped site
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/42.63389/-2.10639) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|building\|monument; sitelinks=7; wikidata:Q3571711 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 15 elements); data/traces/san-esteban-de-deyo-q3571711.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline+walls, 15 elements; outline osm:way/368847545 historic=(none; chosen by its Wikidata id) Q3571711 20 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
