# Torre de Calahiguera

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-de-calahiguera-q43133106` |
| Coordinates | 36.76767, -2.0861 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.76767/-2.0861)) |
| Wikidata | [Q43133106](https://www.wikidata.org/wiki/Q43133106) (CC0) |
| Wikidata class | fort |
| Types | fortified tower\|monument |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | tower |
| OSM `website` | https://guiadigital.iaph.es/bien/inmueble/11987/almeria/nijar/torre-de-calahiguera |

## What the model contains

Tier **T1**, status `outline-only`, 5 elements (outline 1, coastline 1, road 3).

Evidence: documented 0, mapped 5, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1480683906 historic=tower Q43133106 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.76767/-2.0861) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower\|monument; sitelinks=0; wikidata:Q43133106 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 5 elements); data/traces/torre-de-calahiguera-q43133106.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 5 elements; outline osm:way/1480683906 historic=tower Q43133106 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
