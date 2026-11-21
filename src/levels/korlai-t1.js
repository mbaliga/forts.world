// The old Korlai scene stays in korlai.js (its wall, coast and terrain data are imported by chaul-estuary.js); this curated T1 level replaces it in the registry by id.
import { makeT1 } from './t1.js';
import { TRACE } from './korlai.trace.js';
const level = makeT1(TRACE, { id: 'korlai' });
level.region = 'Raigad · Maharashtra';
level.type = 'Headland fort ruin · OSM-mapped outline and wall line (T1, no plan found)';
export default level;
