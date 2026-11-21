# castrum de Saintes

> France · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `castrum-de-saintes-q22955716` |
| Coordinates | 45.74643, -0.64443 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/45.74643/-0.64443)) |
| Wikidata | [Q22955716](https://www.wikidata.org/wiki/Q22955716) (CC0) |
| Wikidata class | fortification |
| Types | castrum\|ancient Roman structure |
| Administrative area | Saintes |
| Designations | classified historical monument |
| Wikipedia language editions | 1 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `ruins` | yes |
| OSM `website` | https://www.ville-saintes.fr/index.php?id=216 |

## What the model contains

Tier **T1**, status `outline+walls`, 267 elements (outline 1, road 61, building 460, water 2, wall 13, zone 69, waterway 1).

Evidence: documented 0, mapped 267, inferred 0, derived 0; heights documented 1, inferred 0, unknown 132.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/206888629 historic=archaeological_site Q2844420 78 m from ledger point
- present-day buildings capped: kept the 120 nearest the outline centre of 460 mapped (trace size budget); the rest of the town is not drawn
- origin moved 77 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/45.74643/-0.64443) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fortification; castrum\|ancient Roman structure; sitelinks=1; wikidata:Q22955716 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 267 elements); data/traces/castrum-de-saintes-q22955716.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/france.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
