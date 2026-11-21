# Fort Screven Historic District

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-screven-historic-district-q49490721` |
| Coordinates | 32.02111, -80.84472 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/32.02111/-80.84472)) |
| Wikidata | [Q49490721](https://www.wikidata.org/wiki/Q49490721) (CC0) |
| Wikidata class | fort |
| Types | historic district\|artillery fort |
| Administrative area | Chatham County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 2 |
| OSM `historic` | fort |
| OSM `heritage` | 2 |

## What the model contains

Tier **T1**, status `outline+walls`, 156 elements (outline 1, marker 1, road 64, coastline 1, building 85, wall 2, zone 1, water 1).

Evidence: documented 0, mapped 156, inferred 0, derived 1; heights documented 2, inferred 0, unknown 85.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/456486141 historic=fort 86 m from ledger point
- origin moved 85 m from the ledger point to the centre of the mapped site
- sea-0: DEM check failed {"cells":0,"medianInside":null,"medianOutside":6.9}

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/32.02111/-80.84472) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; historic district\|artillery fort; sitelinks=2; wikidata:Q49490721 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 156 elements); data/traces/fort-screven-historic-district-q49490721.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
