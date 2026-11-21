# Oultremont Castle

> Belgium · evidence: **T1 (location-only)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `oultremont-castle-q2968332` |
| Coordinates | 50.59381, 5.21822 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/50.59381/5.21822)) |
| Wikidata | [Q2968332](https://www.wikidata.org/wiki/Q2968332) (CC0) |
| Wikidata class | castle |
| Types | castle |
| Administrative area | Villers-le-Bouillet |
| Wikipedia language editions | 3 |
| OSM `historic` | castle |
| OSM `description` | ensemble du château et de la ferme forme aujourd'hui des quadrilatères accolés, auxquels viennent s'ajouter, au N.-E. une chapelle isolée (1649) et au S.-O. une grange en hors-d'oeuvre (XVIIIe s.) |

## What the model contains

Tier **T1**, status `location-only`, 30 elements (road 7, zone 7, building 13, wall 3).

Evidence: documented 0, mapped 30, inferred 0, derived 0; heights documented 1, inferred 0, unknown 15.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/13332805 historic=castle Q2968332 7 m from ledger point
- site is a site relation of 4 parts and none of them outlines the whole site, so no outline is drawn; the scene is fitted to the parts (106 x 114 m)
- origin moved 7 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/50.59381/5.21822) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle; sitelinks=3; wikidata:Q2968332 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 31 elements); data/traces/oultremont-castle-q2968332.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey. \| 2026-11-18: rebuilt because the OSM site relation is not an outline; the scene is fitted to its parts

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/belgium.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
