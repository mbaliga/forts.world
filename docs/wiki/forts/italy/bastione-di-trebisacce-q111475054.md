# bastione di Trebisacce

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `bastione-di-trebisacce-q111475054` |
| Coordinates | 39.86718, 16.52866 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/39.86718/16.52866)) |
| Wikidata | [Q111475054](https://www.wikidata.org/wiki/Q111475054) (CC0) |
| Wikidata class | fortification |
| Types | defensive wall |
| Administrative area | Trebisacce |
| Designations | Italian national heritage |
| Wikipedia language editions | 0 |
| OSM `historic` | building |
| OSM `description` | La Fornace di Laterizi costituisce una delle prime testimonianze in regione dell'utilizzo del cosiddetto "Forno Hoffmann". La sua storia produttiva termina nel 1987. Da allora della Fornace non resta che un valore simbolico, storico e architettonico. |
| OSM `website` | https://calabriastraordinaria.it/luoghi/antica-fornace-trebisacce |

## What the model contains

Tier **T1**, status `outline+walls`, 265 elements (outline 1, marker 1, road 84, building 169, waterway 3, zone 1, coastline 1, wall 2, retaining-wall 2, water 1).

Evidence: documented 0, mapped 265, inferred 0, derived 1; heights documented 0, inferred 0, unknown 173.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/112123800 historic=building 416 m from ledger point
- origin moved 414 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":11,"medianInside":0,"medianOutside":13.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/39.86718/16.52866) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; defensive wall; sitelinks=0; wikidata:Q111475054 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 265 elements); data/traces/bastione-di-trebisacce-q111475054.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
