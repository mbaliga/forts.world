# Fort de Bouc

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-de-bouc-q22986404` |
| Coordinates | 43.3936, 4.9859 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/43.3936/4.9859)) |
| Wikidata | [Q22986404](https://www.wikidata.org/wiki/Q22986404) (CC0) |
| Wikidata class | fort |
| Types | fort |
| Administrative area | Martigues |
| Designations | monument historique inscrit |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | 2 |
| OSM `description` | Présentation Depuis le Moyen Age, il garde ce passage entre le golfe de Fos et l'Etang de Berre. Par sa position stratégique pour le commerce maritime et le contrôle de la région, le Fort de Bouc a eu une fonction double, à la fois ouvrage défensif et pha |
| OSM `barrier` | city_wall |
| OSM `website` | https://www.cheminsdememoire.gouv.fr/fr/fort-de-bouc |

## What the model contains

Tier **T1**, status `outline+walls`, 36 elements (outline 1, coastline 2, building 6, road 16, water 3, waterway 1, retaining-wall 2, wall 4).

Evidence: documented 0, mapped 36, inferred 0, derived 1; heights documented 1, inferred 0, unknown 12.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/169556492 historic=castle Q22986404 19 m from ledger point
- origin moved 19 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":352,"medianInside":-1638.3,"medianOutside":-1638.3}
- 2025 DEM cells below -3 m (bathymetry) clamped to -3 m
- 11 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/43.3936/4.9859) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; fort; sitelinks=3; wikidata:Q22986404 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 36 elements); data/traces/fort-de-bouc-q22986404.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
