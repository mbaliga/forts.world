# Forte di Gavi

> Italy · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `forte-di-gavi-q3748679` |
| Coordinates | 44.69133, 8.80444 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/44.69133/8.80444)) |
| Wikidata | [Q3748679](https://www.wikidata.org/wiki/Q3748679) (CC0) |
| Wikidata class | fort |
| Types | fort\|Italian national museum\|historical park museum\|military museum building\|Museum of the Italian Ministry of Culture |
| Administrative area | Gavi |
| Designations | Italian national heritage |
| Wikipedia language editions | 4 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `description` | I giorni di apertura sono variabili, consultare il PDF in “Visita il Forte di Gavi” ( www.polomusealepiemonte.beniculturali.it/index.php/musei-e-luoghi-della-cultura/forte-di-gavi/visita-il-forte-di-gavi/) |
| OSM `barrier` | wall |
| OSM `website` | http://www.associazionefortedigavi.it/ |

## What the model contains

Tier **T1**, status `outline+walls`, 226 elements (outline 1, waterway 2, road 50, building 157, zone 7, wall 5, retaining-wall 3).

Evidence: documented 0, mapped 226, inferred 0, derived 0; heights documented 2, inferred 0, unknown 164.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/63804461 historic=castle Q3748679 9 m from ledger point
- origin moved 6 m from the ledger point to the outline centroid
- 6 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/44.69133/8.80444) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort\|Italian national museum\|historical park museum\|military museum building\|Museum of the Italian Ministry of Culture; sitelinks=4; wikidata:Q3748679 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 226 elements); data/traces/forte-di-gavi-q3748679.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/italy.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
