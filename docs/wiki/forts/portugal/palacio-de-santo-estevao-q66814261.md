# Palácio de Santo Estêvão

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-de-santo-estevao-q66814261` |
| Coordinates | 38.71236, -9.12747 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.71236/-9.12747)) |
| Wikidata | [Q66814261](https://www.wikidata.org/wiki/Q66814261) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Santa Maria Maior |
| Designations | Pending classification monument |
| Wikipedia language editions | 0 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | A origem deste palácio é polémica:uns defendem que remonta ao séc. XIV,quando o Chanceler-Mor do Rei D. Dinis,Pedro Salgado,proprietário de umas casas nobres sitas ao Arco do Chanceler,mandou construir o seu próprio palácio... |

## What the model contains

Tier **T1**, status `outline+walls`, 313 elements (outline 1, marker 14, road 270, building 771, retaining-wall 8, wall 14, zone 3, water 1, coastline 1, waterway 1).

Evidence: documented 0, mapped 313, inferred 0, derived 0; heights documented 7, inferred 0, unknown 135.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:relation/3311900 historic=castle Q66814261 2 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- present-day buildings capped: kept the 120 nearest the outline centre of 771 mapped (trace size budget); the rest of the town is not drawn
- roads capped: kept the 150 longest of 270 mapped (trace size budget); minor lanes are not drawn
- origin moved 3 m from the ledger point to the centre of the mapped site

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.71236/-9.12747) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=0; wikidata:Q66814261 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 313 elements); data/traces/palacio-de-santo-estevao-q66814261.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
