# Fort du Chenal

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-du-chenal-q127786721` |
| Coordinates | 48.74154, -4.03484 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/48.74154/-4.03484)) |
| Wikidata | [Q127786721](https://www.wikidata.org/wiki/Q127786721) (CC0) |
| Wikidata class | fort |
| Types | fortification |
| Administrative area | Île-de-Batz |
| Designations | listed in the general inventory of cultural heritage |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |

## What the model contains

Tier **T1**, status `outline-only`, 8 elements (outline 1, coastline 1, road 5, water 1).

Evidence: documented 0, mapped 8, inferred 0, derived 1; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/72269426 historic=castle 610 m from ledger point
- origin moved 609 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":296,"medianInside":0,"medianOutside":9.3}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/48.74154/-4.03484) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fortification; sitelinks=2; wikidata:Q127786721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 8 elements); data/traces/fort-du-chenal-q127786721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
