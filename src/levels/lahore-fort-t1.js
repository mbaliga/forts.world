import { makeT1 } from './t1.js';
import { TRACE } from './lahore-fort.trace.js';
const level = makeT1(TRACE, { id: 'lahore-fort' });
level.region = 'Lahore · Punjab (Pakistan)';
level.type = 'Mughal fort · OSM-mapped outline and walls (T1, no plan found)';
export default level;
