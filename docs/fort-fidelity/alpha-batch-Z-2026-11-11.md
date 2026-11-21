# Alphabetical batch Z (requested 2026-11-11)

Ten sites spread across A-Z (every third letter counting down from Z, wrapping to Y), starting on Z. Built last against every other alpha batch file, `REQUEST.txt`, batch 0, existing traces and geometry on the branch; no site overlaps at the time of writing. Picks past the first few ranked candidates are drawn from the top four unused per letter because parallel chats keep taking the obvious ones.

| Letter | site_id | Name | Type | Confidence | Radius (m) |
|---|---|---|---|---|---|
| Z | zaver-mahal-q117032083 | Zaver Mahal | palace | medium | 500 |
| W | wari-bateshwar-fort-city-sn3785 | Wari-Bateshwar Fort City | fort | medium | 1500 |
| T | thiagadurgam-fort-q31379708 | Thiagadurgam Fort | fort | high | 800 |
| Q | qal-ah-ye-wakil-q21822928 | Qal‘ah-ye Wakīl | fort | medium | 500 |
| N | nagaur-fort-q97119606 | Nagaur Fort | fort | high | 800 |
| K | kot-diji | Kot Diji Fort | fort | high | 600 |
| H | hariharpur-gadhi-q109905441 | Hariharpur Gadhi | fort | high | 800 |
| E | entire-ruined-fort-enclosure-with-projecting-cor-q97691998 | Entire ruined fort enclosure with projecting corners towers and numerous mounds | fort | medium | 800 |
| B | baltit | Baltit Fort, Hunza | fort | high | 500 |
| Y | yamakanmardi-sn951 | Yamakanmardi | fort | medium | 500 |

Order is Z first, then Z W T Q N K H E B, wrapping to Y. Z, W, Q and Y have thin pools, so the best remaining candidate was taken even if confidence is medium.

Status: ledger rows unchanged (still `todo`) until a tier is reached. Medium-confidence rows need promoting to high in `data/sites.csv` once plan evidence is found. Geometry request string for `fetch-geometry` (per-site radii):

`zaver-mahal-q117032083:500,wari-bateshwar-fort-city-sn3785:1500,thiagadurgam-fort-q31379708:800,qal-ah-ye-wakil-q21822928:500,nagaur-fort-q97119606:800,kot-diji:600,hariharpur-gadhi-q109905441:800,entire-ruined-fort-enclosure-with-projecting-cor-q97691998:800,baltit:500,yamakanmardi-sn951:500`
