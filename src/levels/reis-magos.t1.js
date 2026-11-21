// Reis Magos, auto-T1: the pipeline output for comparison with the hand-authored reis-magos.js.
// Trace: data/traces/reis-magos.trace.json (OpenStreetMap © contributors, ODbL; Terrarium tiles).
import { makeT1 } from './t1.js';
import trace from '../../data/traces/reis-magos.trace.json' with { type: 'json' };
export default makeT1(trace, { id: 'reis-magos-t1' });
