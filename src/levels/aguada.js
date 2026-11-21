// Fort Aguada, Bardez, Goa: hand-curated trace (aguada.trace.js, tier T1 with three dated eras) built by the shared scene builder.
// Evidence, conflicts and what is missing for T2: docs/research/aguada-pass.md. OpenStreetMap © contributors (ODbL); Terrarium elevation tiles.
// Replaces the generated gen.js scene that was withdrawn in the 2026-11-01 pass.
import { makeT1 } from './t1.js';
import { TRACE } from './aguada.trace.js';

const level = makeT1(TRACE, { id: 'aguada' });
level.region = 'Bardez · Goa';
level.type = 'Fort and lighthouse · mapped research reconstruction · T1, three dated eras';
export default level;
