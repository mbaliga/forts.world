# Torre d'Aguiló

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `torre-d-aguilo-q9089008` |
| Coordinates | 38.51956, -0.17156 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.51956/-0.17156)) |
| Wikidata | [Q9089008](https://www.wikidata.org/wiki/Q9089008) (CC0) |
| Wikidata class | fort |
| Types | fortified tower |
| Administrative area | La Vila Joiosa |
| Designations | bien de interés cultural |
| Wikipedia language editions | 3 |
| OSM `historic` | tower |

## What the model contains

Tier **T1**, status `outline-only`, 17 elements (outline 1, coastline 1, road 14, water 1).

Evidence: documented 0, mapped 17, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/516826630 historic=tower Q9089008 2 m from ledger point
- origin moved 3 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":30,"medianInside":0,"medianOutside":85.9}
- 4 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.51956/-0.17156) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortified tower; sitelinks=3; wikidata:Q9089008 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 17 elements); data/traces/torre-d-aguilo-q9089008.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt after the outline picker learned to take an OSM area tagged with the site's own Wikidata id; auto-T1 rebuilt (outline-only, 17 elements; outline osm:way/516826630 historic=tower Q9089008 2 m from ledger point). Fidelity unverified; T2 still needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
