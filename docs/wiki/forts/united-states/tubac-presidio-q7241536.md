# Tubac Presidio

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `tubac-presidio-q7241536` |
| Coordinates | 31.61212, -111.04643 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/31.61212/-111.04643)) |
| Wikidata | [Q7241536](https://www.wikidata.org/wiki/Q7241536) (CC0) |
| Wikidata class | ruin |
| Types | fort\|archaeological site\|presidio\|ruins |
| Administrative area | Tubac |
| Inception | 1752 |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 3 |
| OSM `historic` | archaeological_site |
| OSM `heritage` | 2 |
| OSM `barrier` | wall |

## What the model contains

Tier **T1**, status `outline+walls`, 119 elements (outline 1, road 39, building 71, wall 6, waterway 1).

Evidence: documented 0, mapped 119, inferred 0, derived 0; heights documented 0, inferred 0, unknown 78.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/685295604 historic=archaeological_site Q7241536 17 m from ledger point
- origin moved 14 m from the ledger point to the centre of the mapped site
- 4 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/31.61212/-111.04643) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=ruin; fort\|archaeological site\|presidio\|ruins; sitelinks=3; wikidata:Q7241536 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 119 elements); data/traces/tubac-presidio-q7241536.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
