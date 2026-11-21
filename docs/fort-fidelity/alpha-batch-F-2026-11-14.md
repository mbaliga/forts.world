# Alphabetical batch starting at F (2026-11-14)

Ten sites, every third letter from F, one per letter (F I L O R U, then Y for the empty X slot, then A D G). Machine-readable twin: `batch-alpha-F.csv`.

Checked on 2026-11-14 against every `batch-alpha-*.csv`, every `alpha-batch-*.md`, `data/geometry/*`, every line of `REQUEST.txt` and all non-todo ledger rows. Two extra tests for "no overlaps": no pick lies within 2 km of any claimed site (catches the same place under two ids, e.g. Firoz Shah Palace vs Feroz Shah Kotla), and none lies within 2 km of another pick. Several first picks were taken by other chats during the run (Raisen, Dhar Durg, Gohad, Ghosalegad, Raigad, Dindigul) and were swapped for unclaimed forts; the picks for R, D and G are deliberately not the top-ranked free sites, to avoid colliding with the next chat.

| Seq | Letter | site_id | Name | Type | Radius (m) |
|---|---|---|---|---|---|
| 1 | F | fort-dansborg-q11964733 | Fort Dansborg | fort | 300 |
| 2 | I | ishvara-temple-arasikere-q6080700 | Ishvara Temple, Arasikere | temple | 400 |
| 3 | L | lohagarh | Lohagarh, Bharatpur | fort | 1000 |
| 4 | O | obelisk-monuments-and-fort-walls-near-the-breach-q97440985 | Obelisk Monuments and Fort walls near the Breach | fort | 500 |
| 5 | R | rasalgad-q24950082 | Rasalgad | fort | 500 |
| 6 | U | uparkot | Uparkot, Junagadh | fort | 600 |
| 7 | Y | yameshwar-temple-q3517635 | Yameshwar Temple | temple | 400 |
| 8 | A | ajaigarh | Ajaigarh | fort | 1200 |
| 9 | D | durg-mandalgarh-q140982232 | Durg Mandalgarh | fort | 1000 |
| 10 | G | ganjam-fort-q60398686 | Ganjam  Fort | fort | 600 |

Notes
- X has no free site, so Y fills that slot (same approach as batch X). Letters I, O, U and Y have no free high-confidence fort; those picks are the top-ranked free temple or medium-confidence fort.
- Order of work: F first, then down the list. Ledger rows stay `todo` until a tier is reached.
- Geometry: first line of `data/geometry/REQUEST.txt` (push-triggered fetch-geometry).
- Repaired three unresolved merge-conflict regions left in `ledger.csv` by the alpha-D commit (siri-fort, manjarabad/munger, jata-shankar); both sides' batch tags kept.
