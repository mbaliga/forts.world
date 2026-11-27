# The world's twenty most acclaimed forts (draft list)

Chosen by how often each appears in published "greatest forts and castles" lists, to be confirmed by Madhav.
Sources compared: Rough Guides, "Formidable fortresses: 20 imposing castles"
(https://roughguides.com/articles/epic-fortresses-castles-around-the-world) and Interesting Engineering,
"21 of the great fortresses around the world"
(https://interestingengineering.com/culture/21-of-the-great-fortresses-around-the-world). Thirteen appear in both;
seven more come from one list each. The Cheyenne Mountain Complex (a Cold War bunker) and the Rock of Gibraltar (a
whole promontory) are left out.

Goal for each: a hand-curated, detailed, walkable scene (T2 or better under STANDARD.md), plus a caricature model for
the featured-forts world. Every one already has an automatic T1 trace (outline and walls) in the ledger.

| # | Ledger id | Fort | Country | In both lists | Already rebuilt |
|---|---|---|---|---|---|
| 1 | `murud-janjira` | Murud-Janjira | India | yes | yes (hand level) |
| 2 | `mehrangarh` | Mehrangarh | India | yes | yes (hand level) |
| 3 | `krak-des-chevaliers-q177549` | Krak des Chevaliers | Syria | yes | no |
| 4 | `citadel-of-aleppo-q206231` | Citadel of Aleppo | Syria | yes | no |
| 5 | `tower-of-london-q62378` | Tower of London | United Kingdom | yes | no |
| 6 | `conwy-castle-q756830` | Conwy Castle | United Kingdom | yes | no |
| 7 | `malbork-castle-q71279` | Malbork Castle | Poland | yes | no |
| 8 | `spis-castle-q205558` | Spiš Castle | Slovakia | yes | no |
| 9 | `prague-castle-q193369` | Prague Castle | Czechia | yes | no |
| 10 | `rumeli-hisar-q90801` | Rumeli Hisarı | Türkiye | yes | no |
| 11 | `alcazar-of-toledo-q1326589` | Alcázar of Toledo | Spain | yes | no |
| 12 | `bourtange-fortress-q5470838` | Bourtange | Netherlands | yes | no |
| 13 | `fort-douaumont-q186536` | Fort Douaumont | France | yes | no |
| 14 | `kumbhalgarh` | Kumbhalgarh | India | Rough Guides | yes (hand level) |
| 15 | `himeji-castle-q188754` | Himeji Castle | Japan | Rough Guides | no |
| 16 | `edinburgh-castle-q212065` | Edinburgh Castle | United Kingdom | Interesting Engineering | no |
| 17 | `dover-castle-q950970` | Dover Castle | United Kingdom | Interesting Engineering | no |
| 18 | `fortifications-of-kotor-q12907852` | Fortifications of Kotor | Montenegro | Rough Guides | no |
| 19 | `potala-palace-q71229` | Potala Palace | China | Rough Guides | no |
| 20 | `buda-castle-q46313` | Buda Castle | Hungary | Rough Guides | no |

Next steps per fort, in order: plan search (queued in `data/plans/SEARCH.txt`), fetch the licensed plans, a
research pass (`docs/research/<id>-pass.md`), hand curation (`tools/trace/curation/<id>.mjs`), dated eras, the
constructed layer, smoke test, then a caricature model for the featured world. Syria's two sites will have few
recent surveys; record what is missing rather than filling gaps.
