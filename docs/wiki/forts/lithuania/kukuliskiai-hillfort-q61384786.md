# Kukuliškiai hillfort

> Lithuania · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `kukuliskiai-hillfort-q61384786` |
| Coordinates | 55.78293, 21.07629 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/55.78293/21.07629)) |
| Wikidata | [Q61384786](https://www.wikidata.org/wiki/Q61384786) (CC0) |
| Wikidata class | fort |
| Types | hillfort\|archaeological site |
| Administrative area | Kretingalė Eldership |
| Designations | archaeological site |
| Wikipedia language editions | 3 |
| OSM `historic` | ruins |
| OSM `description` | Pakrančių apsaugos baterija – tai Antrojo pasaulinio karo laikų gynybiniai įtvirtinimai prie Baltijos jūros, įrengti Klaipėdos kraštą prijungus prie Vokietijos. |
| OSM `website` | https://www.facebook.com/memelnord/ |

## What the model contains

Tier **T1**, status `location-only`, 38 elements (marker 1, building 12, road 23, coastline 1, water 1).

Evidence: documented 0, mapped 38, inferred 0, derived 1; heights documented 0, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/12636230 historic=ruins 548 m from ledger point
- site is a site relation of 6 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (103 x 255 m)
- origin moved 536 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":259,"medianInside":0,"medianOutside":8.1}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/55.78293/21.07629) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; hillfort\|archaeological site; sitelinks=3; wikidata:Q61384786 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 38 elements); data/traces/kukuliskiai-hillfort-q61384786.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/lithuania.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
