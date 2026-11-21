# Aguada: fort-fidelity pass (batch 1)

Date of pass: 2026-11-03. Branch `fort-fidelity`. Trace: `src/levels/aguada.trace.js`
(generated from `data/traces/aguada.trace.json` plus `tools/trace/curation/aguada.mjs`). Level: `src/levels/goa-coast.js` (`aguada`).
Supersedes the scene description in `aguada-upper-citadel-pass.md`; the facts in that note that are not repeated here still stand.

**Method and limit.** Text sources were read through WebSearch/WebFetch; the sandbox cannot download or view plan images or
photographs, and several hosts were unreachable (hpip.org, dgll.nic.in, Strathclyde, Kiperman, Archnet, British Library,
Wikimedia Commons). Some pages reached us only as summaries from the fetch tool. Everything below is therefore secondary evidence
unless stated. **No plan or photograph was registered to the scene**, so nothing here reaches tier T2.

## Documented (text sources)

| Fact | Value | Source | Strength |
|---|---|---|---|
| Upper fort completed | 1612 (construction began 1609) | ASI Goa Circle (AGU-08); HMDB marker (AGU-17); OSM `start_date=1612` on relation 6411420 | good for 1612; 1609 start is from newspaper features (AGU-14, AGU-15) |
| Builder context | Governor Ruy Lourenço de Távora; Dutch threat after the 1604 attack on the Mandovi | ASI Goa Circle (AGU-08); The Goan (AGU-14) | secondary |
| Dry moat | about 6.5 m wide, 5.2 m deep, cut in laterite, on three sides | ASI Goa Circle (AGU-08); marker photographed at HMDB (AGU-06) | good (official text) |
| Cistern | underground, 5 divisions on 16 rock-cut columns, about 2.376 million gallons | ASI Goa Circle (AGU-08); HMDB marker (AGU-17) | good |
| Old lighthouse height and diameter | 10 m high, 12 m across, tapering | ASI Goa Circle (AGU-08) | good, but conflicts below |
| Old lighthouse date | 1864 | Wikipedia (AGU-16); The Goan (AGU-14); DGLL (AGU-18) | consistent, but ASI says the date is unknown |
| New lighthouse | built 1976; old one abandoned | HMDB marker (AGU-17); ASI; Wikipedia | good |
| New lighthouse height | 18 m | DGLL master ledger (AGU-12) | ledger position is about 460 m from the OSM footprint |
| Lower fort | ship anchorage and watering station; later a jail, then Goa's Central Jail; inmates moved out 2015; Freedom Struggle Museum opened 19 Dec 2021 | ASI (AGU-08); Gomantak Times (AGU-15); The Goan (AGU-14); Wikipedia (AGU-16) | secondary; jail start date not given |

## Mapped (OpenStreetMap, ODbL)

Upper-citadel relation 6411420 (the outline is a join of two ways and is irregular, not a measured wall centreline); wall ways
156468754, 430917627, 430917629, 430893995, 889912615, 430896323-5; old lighthouse footprint 156468581 (about 115 m², consistent with
a 12 m diameter); modern lighthouse 156468582 and its DGPS enclosure 430893996; the lower port-and-jail buildings; present roads and
footways; the present coastline 430895607 and 1259472909. No OSM wall carries a height tag.

## Inferred (drawn, flagged `inferred` in the trace)

- **Ditch path.** Way 430917629 is a three-sided open loop around the north of the plateau. ASI places the moat on three sides, so the
  ditch is drawn as that way offset 6 m outward. The match is geometric reasoning, not a plan. Width and depth are the ASI figures; the
  floor level is the coarse DEM ground minus 5.2 m at each vertex.
- **Historic eras.** The mapped wall lines are carried back to 1612 and 1864 on the assumption that they have not moved. No earlier plan was
  found. The present coastline is carried back in the same way.
- **Heights.** Only the old lighthouse (10 m) and modern lighthouse (18 m) have sourced heights. Every wall and building without one is
  drawn as a kerb-high plan line labelled "elevation unknown".

## Not drawn, although text describes it

Main gate (a corner of the citadel facing the Mandovi, per The Goan), a moat bridge, three corner bastions, gunpowder room,
escape passage, three springs at the seaward entrance, lower-fort barracks/quarters/chapel/gunpowder store, the cistern roof and
entrance. None has a plan or photo position, so none is placed. Each historic era lists them in its "documented but not placed" card.

## Conflicts

- Shape: square with three bastions and a gate at the fourth corner (The Goan, Gomantak Times) versus star-shaped (ASI).
- Upper-fort area: ASI gives about 95,768 m²; the mapped outline is about 12,500 m². The outline is evidently not the whole enclosure.
- Old lighthouse height: 10 m (ASI), 13 m (Gomantak Times), 16 m (DGLL), 7 m (OSM tag). The scene uses ASI's 10 m and its 12 m diameter
  agrees with the mapped footprint.
- Old lighthouse date: 1864 (three sources) versus ASI "unknown, perhaps earlier"; a marker implies a light flash change in 1834.
- Guns: 79 (Wikipedia) versus about 200 at peak (The Goan).
- No source read describes Dutch-period or Maratha-period changes at Aguada; none are shown.

## Missing evidence for T2

1. A scaled plan of the upper fort and moat: Nuno Lopes, *Goa, uma perspectiva territorial de defesa (1510-1660)*, section 4.1.1 and its
   "Inventory of Technical Drawings" (contents list seen at goa1556.in; drawings not seen).
2. The ASI Goa Circle aerial image marking the tank (referenced by its page; not registered).
3. Photographs or elevations that give wall heights and bastion forms.
4. A dated source for the lower fort in 1612 and for the old lighthouse before 1864.
5. The monumentos.pt record SIPA 24413 (cited in the OSM relation) was not read.
