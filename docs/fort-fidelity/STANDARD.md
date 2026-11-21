# Fort reconstruction standard

A fort scene is "real" only when each tier below is met and labelled. Evidence beats appearance: never invent detail and present it as documented.

| Tier | Name | Requirement |
|---|---|---|
| T0 | Schematic | Generated from `gen.js` data sheet. Not acceptable as an end state. |
| T1 | Located | Outline from OSM / survey / georeferenced plan; DEM terrain (Terrarium z15 or better); coast/river/tank water in place; correct orientation. |
| T2 | Fitted | Bastions, gates, towers, major buildings placed from a historic plan, ASI/survey drawing or dated photo; dimensions within ~10% of source; stairs/ramps/approach routes follow real ones. |
| T3 | Phased | At least 2-3 dated eras with per-era differences (additions, demolitions, ownership, garrison/settlement) each cited. |
| T4 | Reviewed | Evidence table complete, smoke test passes in all eras, user visual review recorded. |

Rules:
1. Every non-trivial element carries a `src` tag: `osm:<way>`, `plan:<doc#fig>`, `photo:<ref>`, `dem`, or `inferred`. Inferred elements are visibly flagged in the POI text.
2. Do not copy the same hill-fort template. Each fort's silhouette must come from its own outline and terrain (the Janjira and Kumbhalgarh traces are the models).
3. Document facts and inference separately in `docs/research/<id>-*.md`.
4. Source licences: OSM (ODbL) and Terrarium are credited in the level header. Do not paste copyrighted text or images.
5. Tests are not evidence of accuracy.
