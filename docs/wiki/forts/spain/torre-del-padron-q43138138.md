# Torre del Padrón

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-del-padron-q43138138` |
| Coordinates | 36.436, -5.10704 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.436/-5.10704)) |
| Wikidata | [Q43138138](https://www.wikidata.org/wiki/Q43138138) (CC0) |
| Wikidata class | fortification |
| Types | watchtower |
| Administrative area | Estepona |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |

## What the model contains

Tier **T1**, status `outline-only`, 49 elements (outline 1, road 42, coastline 1, waterway 1, building 2, water 2).

Evidence: documented 0, mapped 49, inferred 0, derived 1; heights documented 0, inferred 0, unknown 2.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/769114196 historic=(none; chosen by its Wikidata id) Q43138138 5 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":82,"medianInside":0,"medianOutside":7.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.436/-5.10704) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; watchtower; sitelinks=3; wikidata:Q43138138 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 48 elements); data/traces/torre-del-padron-q43138138.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 49 elements; outline osm:way/769114196 historic=(none; chosen by its Wikidata id) Q43138138 5 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
