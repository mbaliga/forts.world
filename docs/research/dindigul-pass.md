# Dindigul (Malaikottai, Tamil Nadu) - research pass 1

Site id `dindigul`, ledger batch 19, alpha-D batch #1, 10.361 N 77.962 E. Status: research pass only. No geometry, plan or photo has been fetched, so nothing is traced and the tier is still below T1.

## Documented (secondary sources, not drawings)

Sources: [Wikipedia, Dindigul Fort](https://en.wikipedia.org/wiki/Dindigul_Fort); [TN Urban Tree, Dindigul places of interest](https://www.tnurbantree.tn.gov.in/dindigul/places-of-interest/).

- Granite rock fort ("Malaikottai"). Wikipedia gives circumference 2.75 km and says the walls are cemented double walls built against heavy artillery. Wikipedia places the rock at 900 ft (270 m); see conflict 1.
- Madurai Nayak foundation: Muthu Krishnappa Nayak, 1605, with a second fort at the foot of the hill. TN Urban Tree says completed 1623-1659 under Thirumalai Nayak.
- Mysore period: Mysore took Dindigul in 1742; Hyder Ali sent in 1755; governor Purshana Mirsaheb strengthened the fort in 1777; TN Urban Tree says Tipu's commandant Syed Ibrahim added rooms and strengthened walls in 1784. Tipu's rule is dated 1784-1790 (TN Urban Tree) or crowned 1788 (Wikipedia).
- British: Wikipedia gives control from 1790 (James Stewart), 1792 (Tipu's cession) and 1799 in different places. The army garrisoned it 1798-1859; sentinel rooms at each corner in 1798.
- Interior features named by Wikipedia: arms and ammunition godown with vent holes and a sloping roof, rainwater reservoirs using the slope, 48 rooms formerly used as cells, a kitchen, a horse stable, a commanders' meeting hall, cannons at vantage points, and a ruined temple on the summit. The tomb of Ameer-um-Nisha Begam (Begambur) is also named.
- ASI-protected; fenced and refurbished in 2005; currently under renovation per Wikipedia.

## Conflicts

1. Rock height: 900 ft / 270 m (Wikipedia) versus 280 ft (TN Urban Tree). A factor of about 3.2. The 280 ft figure is more plausible for a rock rising above the town plain, but neither is a survey figure, so no elevation is drawn from either. Use the DEM and a spot-height source.
2. Foundation: "16th century" in Wikipedia's lead versus 1605 in its body and infobox. Treat 1605 as the working date.
3. British takeover: 1790, 1792 or 1799. Era boundaries for T3 need a dated primary source before they are fixed.
4. Tipu's reign: crowned 1788 (Wikipedia) versus 1784-1790 (TN Urban Tree).
5. Wikipedia calls the fort "also the Abirami Amman Kalaheswarar Temple". That is a temple name, not the fort; the relation of the temple to the walls is not documented here.

## Not found

- No site plan, ASI drawing or orthophoto located. No wall height, bastion count or gate positions from any source. Per standing rules no gate is placed and no wall elevation is invented until a plan gives them.
- The positions of the magazine, reservoirs, stable and the 48 rooms on the rock are not documented.
- The lower (foot) fort is mentioned but its outline is not documented.

## Needed for T1 / T2

- T1: OSM outline and Terrarium DEM. The sandbox cannot reach Overpass, so `dindigul:1000` is on the `fetch-geometry` request at the head of `data/geometry/REQUEST.txt`.
- T2: ASI Chennai Circle plan or conservation drawing, or dated photographs (British Library 19th-century views of Dindigul are a likely lead).
- T3 eras to try: 1605-1659 Nayak, 1784 Mysore works, 1798-1859 British garrison, today.
