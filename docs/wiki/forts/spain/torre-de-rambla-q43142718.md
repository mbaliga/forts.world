# Torre de Rambla

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-rambla-q43142718` |
| Coordinates | 39.9629, 4.26524 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.9629/4.26524)) |
| Wikidata | [Q43142718](https://www.wikidata.org/wiki/Q43142718) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Maó |
| Designations | bien de interés cultural |
| Wikipedia language editions | 1 |
| OSM `historic` | martello_tower |
| OSM `description` | Torre de Rambla, también conocida como Torre de Sa Torreta. construida por los ingleses en 1802 durante la ocupación militar británica de Menorca |

## What the model contains

Tier **T1**, status `outline-only`, 7 elements (outline 1, coastline 2, road 2, cliff 1, water 1).

Evidence: documented 0, mapped 7, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/153939524 historic=martello_tower Q43142718 8 m from ledger point
- origin moved 7 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":308,"medianInside":0,"medianOutside":0}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.9629/4.26524) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=1; wikidata:Q43142718 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 7 elements); data/traces/torre-de-rambla-q43142718.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 7 elements; outline osm:way/153939524 historic=martello_tower Q43142718 8 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
