# Fort Aguada, Goa

> India · Goa · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `aguada` |
| Coordinates | 15.492, 73.774 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.492/73.774)) |
| Programme catalogue | confidence high, significance rank 221; sources catalogue:aguada;wikidata:Q4991900;wikidata:Q56458685;wikidata:Q56458711;smith-newton:r63;smith-newton:r575 |
| OSM `historic` | castle |
| OSM `castle_type` | fortress |
| OSM `heritage` | http://monumentos.pt/Site/APP_PagesUser/SIPA.aspx?id=24413 |
| OSM `description` | Arquitectura militar. |
| OSM `website` | https://aguada-fort.business.site |

## What the model contains

Tier **T1**, status `outline+walls`, 58 elements (outline 1, road 19, building 25, wall 9, retaining-wall 1, coastline 2, water 1).

Evidence: documented 0, mapped 58, inferred 0, derived 1; heights documented 2, inferred 0, unknown 33.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/6411420 historic=castle 11 m from ledger point
- origin moved 10 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":543,"medianInside":5.6,"medianOutside":61.4}
- 24 DEM cells below -3 m (bathymetry) clamped to -3 m
- 7 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.492/73.774) | 2026-11-02 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-02 |

## Research notes

- [docs/research/aguada-pass.md](../../../research/aguada-pass.md)
- [docs/research/aguada-upper-citadel-pass.md](../../../research/aguada-upper-citadel-pass.md)

## Ledger note

src/levels/aguada.trace.js (curation tools/trace/curation/aguada.mjs), level src/levels/aguada.js; eras 1612/1864/today (historic lines carried back, inferred). Sourced heights: old lighthouse 10 m (ASI), 1976 light 18 m (DGLL); moat path inferred from way 430917629, size from ASI; no gate, bastion, bridge or cistern placed. T2 needs: Lopes 2018 sec 4.1.1 drawings, ASI tank aerial, wall heights and bastion forms. docs/research/aguada-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
