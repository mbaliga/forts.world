# T2 overlays
`<id>.overlay.json` is the hand-authored part of a site's trace. `tools/build-t1.mjs` merges it into
`data/traces/<id>.trace.json`, so the trace stays one document and the overlay is never regenerated.

```jsonc
{
  "heights":  { "outline-wall": { "v": 6, "src": "photo:lopes2018#fig9", "note": "measured against the 2 m door on the south face" } },
  "elements": [ { "id": "gate-main", "kind": "gate", "wall": "outline-wall", "at": [13.7, 12.6], "src": "plan:lopes2018#fig7", "ev": "documented", "conf": 0.7, "name": "Entrance" } ],
  "eras":     [ { "id": "today", … }, { "id": "1707", "year": 1707, "label": …, "sources": ["REIS-02"] } ],
  "diffs":    { "1707": { "remove": ["building-8"], "add": [ … ], "modify": { } } }
}
```
Rules: every element and height cites `plan:`/`photo:`/`osm:`; `ev` is `documented` for plan/photo sources; `tools/check_sources.mjs`
rejects anything else. Candidate gate positions (where mapped paths meet the wall line) are listed in each trace under
`generated.report.openingCandidates` for the author to confirm or reject against a plan.
