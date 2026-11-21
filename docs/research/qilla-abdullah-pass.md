# Qilla Abdullah (Wikidata Q6789339): evidence pass, 2026-11-14

Status: **blocked, no location or form established.** No scene was built.

## Documented
- Wikidata item Q6789339 "Qilla Abdullah" is classed as a fort, with point coordinates 30.7014 N, 68.3597 E (`data/sites-raw/wikidata/PK.json.gz`; one source, medium confidence). It is the only record behind this ledger row.
- A secondary page ([Jatland](https://www.jatland.com/home/Qilla_Abdullah)) names a fort of this name and credits it to Sardar Abdullah Khan Achakzai. It gives no date, form, dimensions, survey or plan.
- The Wikipedia article for [Qila Abdullah](https://en.wikipedia.org/wiki/Qila_Abdullah) covers the town and district headquarters only. It has no fort section.

## Problems
- **Location unverified.** Qila Abdullah town and district are in north-west Balochistan near Chaman, around 66-67 E. The Wikidata point is at 68.36 E, well outside the district. The point may belong to a different place, or be an error, so the ledger coordinates cannot be trusted for this fort.
- **No outline.** The geometry fetch returned terrain tiles only (`osm: false`), so there is no OSM way. Even a correct location would give no plan to trace.
- **No form evidence.** No wall line, gate, bastion, height or phase is documented, so any scene would be generated and not sourced.

## Decision
Per STANDARD.md rule 1 and the ledger workflow, the row is set to `needs-coords` and skipped. It reopens when someone supplies a verified location and a plan, survey or dated photo (British frontier-fort surveys, Balochistan Archaeology Department or Gazetteer entries are the likeliest sources). The terrain tiles already fetched (`data/geometry/qilla-abdullah-q6789339/`) are for the unverified point and should not be used.
