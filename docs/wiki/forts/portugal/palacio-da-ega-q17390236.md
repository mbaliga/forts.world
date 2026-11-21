# Palácio da Ega

> Portugal · evidence: **T1 (auto, outline)** · status: `needs-plan`

## Identity

| Field | Value |
|---|---|
| Site id | `palacio-da-ega-q17390236` |
| Coordinates | 38.69899, -9.18996 ([OpenStreetMap](https://www.openstreetmap.org/#map=17/38.69899/-9.18996)) |
| Wikidata | [Q17390236](https://www.wikidata.org/wiki/Q17390236) (CC0) |
| Wikidata class | castle |
| Types | castle\|palace\|palace\|cultural heritage |
| Administrative area | Alcântara |
| Designations | Immovable Cultural Heritage of Public Interest |
| Wikipedia language editions | 2 |
| OSM `historic` | castle |
| OSM `castle_type` | palace |
| OSM `description` | O primitivo núcleo remonta ao séc. XVI, sendo então propriedade dos Saldanha. Após sucessivas alterações, apresenta actualmente três corpos principais: o da entrada, o do lado sul e o salão Pompeia, a nascente. No interior, destacam-se os painéi |

## What the model contains

Tier **T1**, status `outline+walls`, 304 elements (outline 1, marker 1, road 77, building 212, coastline 1, water 2, wall 8, zone 1, cliff 1).

Evidence: documented 0, mapped 304, inferred 0, derived 0; heights documented 194, inferred 0, unknown 26.

This is an automatic outline: shapes come from OpenStreetMap and ground height from the ~30 m terrain tiles. It is **not** checked against a survey plan, and no gates, bastions or heights are invented.

Build notes:
- site: osm:way/589412727 historic=castle Q17390236 122 m from ledger point
- coastline present but no chain crosses the bounds cleanly; sea polygon not derived
- origin moved 122 m from the ledger point to the centre of the mapped site
- 1 mapped path(s) meet closed wall lines (candidate openings for T2; not drawn)

## Sources used

| Source | Licence | Link | Fetched |
|---|---|---|---|
| OpenStreetMap | ODbL | [link](https://www.openstreetmap.org/#map=17/38.69899/-9.18996) | 2026-11-18 |
| Terrarium elevation tiles (Mapzen / AWS Open Data; SRTM-derived) | see AWS Open Data terrain tiles docs | [link](https://registry.opendata.aws/terrain-tiles/) | 2026-11-18 |

## Ledger note

world; type=castle; castle\|palace\|palace\|cultural heritage; sitelinks=2; wikidata:Q17390236 \| 2026-11-18: auto-T1 by the model-all pipeline run directly (outline+walls, 304 elements); data/traces/palacio-da-ega-q17390236.trace.json. Open-data outline and DEM only, no plan: fidelity unverified; T2 needs a plan or survey.

## 3D model

Viewable in the browser on the Forts of the World page (simplified from this trace). Coarse, medium and full GLB tiers are produced by `tools/export.mjs` and `tools/models/` and are not stored in git. Units: metres, +Y up, -Z north.

[Country page](../../countries/portugal.md) · [Sources](../../SOURCES.md) · [Schema](../../SCHEMA.md)
