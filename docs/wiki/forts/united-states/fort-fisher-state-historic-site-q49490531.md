# Fort Fisher State Historic Site

> United States · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `fort-fisher-state-historic-site-q49490531` |
| Coordinates | 33.97, -77.91806 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/33.97/-77.91806)) |
| Wikidata | [Q49490531](https://www.wikidata.org/wiki/Q49490531) (CC0) |
| Wikidata class | fort |
| Types | park\|fort\|historic site |
| Administrative area | New Hanover County |
| Designations | National Register of Historic Places listed place |
| Wikipedia language editions | 1 |
| OSM `historic` | yes |
| OSM `website` | https://www.ncparks.gov/state-parks/fort-fisher-state-recreation-area |

## What the model contains

Tier **T1**, status `outline-only`, 3 elements (outline 1, road 1, coastline 1).

Evidence: documented 0, mapped 3, inferred 0, derived 0; heights documented 0, inferred 0, unknown 0.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/38583422 historic=yes 1083 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 1091 m from the ledger point to the centre of the mapped site
- 82 DEM cells below -3 m (bathymetry) clamped to -3 m

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/33.97/-77.91806) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=fort; park\|fort\|historic site; sitelinks=1; wikidata:Q49490531 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline-only, 3 elements); data/traces/fort-fisher-state-historic-site-q49490531.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/united-states.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
