# Acropolis Palaiokastro

> Greece · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `acropolis-palaiokastro-q421067` |
| Coordinates | 37.58671, 23.34912 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/37.58671/23.34912)) |
| Wikidata | [Q421067](https://www.wikidata.org/wiki/Q421067) (CC0) |
| Wikidata class | fortification |
| Types | archaeological_site\|polis\|archaeological site |
| Administrative area | Troizinia-Methana Municipality |
| Designations | archaeological site in Greece |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `website` | https://www.methana.com/en/history/archaeolgical-sites-methana/acropolis-paliokastro-vathy.html |

## What the model contains

Tier **T1**, status `outline-only`, 27 elements (outline 1, road 6, coastline 1, building 15, zone 3, water 1).

Evidence: documented 0, mapped 27, inferred 0, derived 1; heights documented 0, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/174450531 historic=archaeological_site Q421067 8 m from ledger point
- origin moved 5 m from the ledger point to the centre of the mapped site
- sea-0: DEM check ok {"cells":78,"medianInside":0,"medianOutside":14.5}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/37.58671/23.34912) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; archaeological_site\|polis\|archaeological site; sitelinks=3; wikidata:Q421067 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 27 elements); data/traces/acropolis-palaiokastro-q421067.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/greece.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
