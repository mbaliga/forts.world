# Reis Magos

> India · Goa · evidence: **T1** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `reis-magos` |
| Coordinates | 15.4965, 73.80913 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/15.4965/73.80913)) |
| Wikidata | [Q10283654](https://www.wikidata.org/wiki/Q10283654) (CC0) |
| Wikidata class | fort |
| Types | fortress |
| Administrative area | Bardez taluk |
| Inception | 1550 |
| Designations | Heritage of Portuguese Influence\|State Protected Monument |
| Wikipedia language editions | 2 |
| Programme catalogue | confidence high, significance rank 267; sources catalogue:reis-magos;wikidata:Q10283654;smith-newton:r138 |
| OSM `historic` | fort |
| OSM `heritage` | http://monumentos.pt/Site/APP_PagesUser/SIPA.aspx?id=24414 |
| OSM `description` | Arquitetura militar, quinhentista. Forte construído pelos portugueses de planta triangular. |
| OSM `barrier` | wall |
| OSM `website` | http://reismagosfort.com |

## What the model contains

Tier **T1**, status `outline+walls`, 20 elements (outline 1, waterway 1, road 7, coastline 2, zone 5, building 1, retaining-wall 1, water 1).

Evidence: documented 0, mapped 20, inferred 0, derived 1; heights documented 0, inferred 0, unknown 3.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/194550880 historic=fort Q10283654 7 m from ledger point
- origin moved 9 m from the ledger point to the outline centroid
- sea-0: DEM check ok {"cells":516,"medianInside":1.7,"medianOutside":9.9}
- 64 DEM cells below -3 m (bathymetry) clamped to -3 m
- 3 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/15.4965/73.80913) | 2026-11-02 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-02 |

## Research notes

- [docs/research/reis-magos-ground-truth-pass.md](../../../research/reis-magos-ground-truth-pass.md)
- [docs/research/reis-magos-pass.md](../../../research/reis-magos-pass.md)

## Ledger note

src/levels/reis-magos.trace.js (curation tools/trace/curation/reis-magos.mjs), level src/levels/reis-magos.js; eras 1551/1707/today (OSM perimeter, coast, sea carried back, inferred; church footprint from 1707, inferred). Hand level kept as src/levels/reis-magos-hand.js (unregistered); its gate, stair, pavilions, church mass and 20 m church stair are NOT drawn (no plan position). Origin conflict 1493 vs 1551. Open issue: a water cut inside the lower-left of the perimeter in every era, likely from the derived sea polygon or river coastline. T2 needs: Lopes 2018 fig 7, INTACH/da Cunha restoration survey, on-site plan at scale, wall heights. docs/research/reis-magos-pass.md

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/india.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
