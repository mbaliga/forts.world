# Fort Saint-Sauveur

> France · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-saint-sauveur-q17347036` |
| Coordinates | 50.6294, 3.07157 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.6294/3.07157)) |
| Wikidata | [Q17347036](https://www.wikidata.org/wiki/Q17347036) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Lille |
| Designations | classified historical monument\|monument historique inscrit |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `description` | La façade principale de la chapelle : classement par arrêté du 12 décembre 1910 - Les façades et toitures de l'ensemble des bâtiments formant le Fort, à l'exception de la façade |

## What the model contains

Tier **T1**, status `location-only`, 342 elements (marker 6, road 172, building 126, zone 19, wall 19).

Evidence: documented 0, mapped 342, inferred 0, derived 0; heights documented 55, inferred 0, unknown 90.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/7512966 historic=fort Q17347036 20 m from ledger point
- site is a site relation of 20 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (129 x 97 m)
- origin moved 2 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.6294/3.07157) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=2; wikidata:Q17347036 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (location-only, 342 elements); data/traces/fort-saint-sauveur-q17347036.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
