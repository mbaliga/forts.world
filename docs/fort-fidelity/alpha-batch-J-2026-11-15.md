# Alphabetical batch starting at J (2026-11-15)

Ten forts spread across A-Z, beginning at J and wrapping round (K, M, R, S, A, B, C, D, G): for each letter, the highest-ranked `type=fort`, `confidence=high`, rank under 1500 row in `queue-high.csv` that nothing else holds. Machine-readable list: `batch-alpha-J.csv`.

Letters are the first letter of the site name. Letters skipped for lack of a free fort: L, N, O, P, Q, T, U, V, W, X, Y, Z, E, F, H, I. N has only Naldurg (held by the S batch and the Deccan citadel pass), a gate and a rampart corner; T has only an unlocated "Fortification wall".

Judgement calls, all against the pure rank rule:
- S: Surat Castle (rank 515) over Shirgaon Fort (511) because Surat has the better-documented plans and survey drawings, so a T2 trace is realistic.
- C: Chandrapur Fort Wall over Chandravalli (430), which is an excavated settlement rather than a fort; Convocation Hall, Mumbai (38) is not a fort.
- S: Shalamar Gardens (54) is a garden, not a fort, and is covered by `north-central-fort-followup.md`.
- G: Gulganj Fort over Garh Palace, Jhalawar (592), which is a palace.

Checked at push time against every `batch-alpha-*.csv` and `alpha-batch-*.md`, every `data/geometry/` folder, every line of `data/geometry/REQUEST.txt`, every level file, research doc and curation script by name, ledger rows already tagged `Batch 0` or `Alpha-*` or past `todo`, and anything with `duplicate_of`. Konark, Nalanda and Taxila stay with the plan/photo tracer chat.

| Seq | Letter | site_id | Name | Radius (m) |
|---|---|---|---|---|
| 1 | J | jalore-fort-q98915208 | Jalore Fort | 800 |
| 2 | K | kishangarh-fort-jaisalmer-q140478848 | Kishangarh Fort Jaisalmer | 700 |
| 3 | M | madhavagadh-fort-q97101388 | Madhavagadh Fort | 700 |
| 4 | R | rabdentse-q1244570 | Rabdentse | 700 |
| 5 | S | surat-castle-q28153959 | Surat Castle | 700 |
| 6 | A | avchitgad-q4827896 | Avchitgad | 700 |
| 7 | B | ballal-dhipi-q56380554 | Ballal Dhipi | 700 |
| 8 | C | chandrapur-fort-wall-q97147923 | Chandrapur Fort Wall | 1500 |
| 9 | D | dongartal-fort-q97148059 | Dongartal Fort | 700 |
| 10 | G | gulganj-fort-q97101031 | Gulganj Fort | 700 |

Geometry: line 1 of `data/geometry/REQUEST.txt` (a push triggers fetch-geometry); earlier request lines are kept beneath it.
Ledger rows stay `todo` until a tier is reached; their notes carry an "Alpha-J batch" tag. Work order: J first, then down the list.
