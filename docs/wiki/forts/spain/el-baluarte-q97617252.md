# El Baluarte

> Spain · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `el-baluarte-q97617252` |
| Coordinates | 36.27629, -6.09152 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/36.27629/-6.09152)) |
| Wikidata | [Q97617252](https://www.wikidata.org/wiki/Q97617252) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Conil de la Frontera |
| Designations | bien de interés cultural |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `description` | Construido a comienzo del siglo XVIII, era el único molino de molienda que existía en Conil, ya que el privilegio de moler el trigo para hacer pan lo tenía el Duque de Medina Sidonia, que obligaba a los conileños a desplazarse a La Muela (Vejer) para tal  |
| OSM `website` | https://turismoconil.es/es/poi/que-hacer/edificios-de-interes/molino-de-viento |

## What the model contains

Tier **T1**, status `outline+walls`, 274 elements (outline 1, marker 2, road 134, waterway 1, building 756, coastline 1, wall 8, retaining-wall 4, zone 1, water 2).

Evidence: documented 0, mapped 274, inferred 0, derived 0; heights documented 0, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/1308606524 historic=building 151 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 756 mapped (trace size budget); the rest of the town is not drawn
- origin moved 151 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/36.27629/-6.09152) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q97617252 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 274 elements); data/traces/el-baluarte-q97617252.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/spain.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
