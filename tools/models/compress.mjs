// usage: node compress.mjs in.raw.glb out.glb [simplifyRatio]
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression } from '@gltf-transform/extensions';
import { weld, simplify, prune, dedup, quantize } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
await MeshoptEncoder.ready; await MeshoptSimplifier.ready;
const [,, a, b, ratio] = process.argv;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
const doc = await io.read(a);
const fns = [weld({ tolerance: 0.001 })];
if (ratio) fns.push(simplify({ simplifier: MeshoptSimplifier, ratio: +ratio, error: 0.02 }));
fns.push(prune(), dedup(), quantize({ quantizePosition: 14, quantizeNormal: 8, quantizeColor: 8 }));
await doc.transform(...fns);
doc.createExtension(EXTMeshoptCompression).setRequired(true).setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
await io.write(b, doc);
