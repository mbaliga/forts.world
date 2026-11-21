# forts.world

Walkable 3D reconstructions of forts. Start every session with `docs/fort-fidelity/WORKFLOW.md` and
`docs/fort-fidelity/STANDARD.md`; the ledger (`docs/fort-fidelity/ledger.csv`), not chat memory, is the handoff.

- Branches: work on `dev`. Never push to `main`; it is what forts.world serves and changes only by a pull request from `dev`.
- Git: shallow clone only (the tree is about 4 GB, mostly `data/traces`). Push with `git -c push.negotiate=true push`.
  Run `git pull --rebase origin dev` before pushing: the pipelines and the daily run also commit there.
- Everything runs from the repository root: `pnpm i`, `node build.mjs --level src/levels/<id>.js`,
  `node tools/smoke.mjs <id>`, `node tools/trace/make-trace-js.mjs <id>`, `node --test tests/*.mjs tests/*.cjs`
  (30 legacy failures are known; do not add new ones).
- The sandbox cannot reach OpenStreetMap, Wikidata, Commons or terrain tiles: use the request-file pipelines in README.
- Reading the web: run WebSearch first and WebFetch only URLs it returned; typed URLs are refused in unattended runs.
- Evidence rules: no invented elevations or gates on the documented layer; the constructed layer is tinted, named
  "schematic", and every element has a basis and an assumed height with its rule; keep hand levels beside auto ones;
  say what is missing rather than inventing it.
- Licences (`LICENSES.md`): textures and models CC0 only; no CC BY-SA or NC pixels, nothing from Unsplash or Pexels;
  do not trace OpenStreetMap into data under another licence; never commit raw geometry (`data/geometry/<id>/`) for
  sites that are not tracked; never add the excluded datasets (0 A.D. models, historical-basemaps, HydroRIVERS,
  the Janjira photo tint).
- Models: Sonnet for per-fort tracing and iteration; Opus or Fable for architecture, hard research and
  photorealism or art-direction decisions.
