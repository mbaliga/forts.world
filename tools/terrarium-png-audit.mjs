import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import { decodeTerrariumPNG } from './terrarium-png.mjs';

const width = 4, height = 5, channels = 3, stride = width * channels;
const image = Buffer.from(Array.from({ length: stride * height }, (_, i) => (i * 37 + Math.floor(i / stride) * 19) & 255));
const rows = [];
const paeth = (a, b, c) => {
  const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
};
for (let y = 0; y < height; y++) {
  const filter = y, row = image.subarray(y * stride, (y + 1) * stride), prior = y ? image.subarray((y - 1) * stride, y * stride) : null;
  rows.push(filter);
  for (let x = 0; x < stride; x++) {
    const a = x >= channels ? row[x - channels] : 0, b = prior?.[x] || 0, c = prior && x >= channels ? prior[x - channels] : 0;
    const pred = filter === 0 ? 0 : filter === 1 ? a : filter === 2 ? b : filter === 3 ? Math.floor((a + b) / 2) : paeth(a, b, c);
    rows.push((row[x] - pred + 256) & 255);
  }
}
function chunk(type, data) {
  const header = Buffer.alloc(8); header.writeUInt32BE(data.length, 0); header.write(type, 4, 'ascii');
  return Buffer.concat([header, data, Buffer.alloc(4)]);
}
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4); ihdr[8] = 8; ihdr[9] = 2;
const png = Buffer.concat([
  Buffer.from([137,80,78,71,13,10,26,10]), chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(Buffer.from(rows))), chunk('IEND', Buffer.alloc(0)),
]);
const decoded = decodeTerrariumPNG(png);
assert.equal(decoded.width, width); assert.equal(decoded.height, height);
assert.deepEqual(decoded.pixels, image, 'PNG filters 0–4');
assert.equal(decoded.elevationAt(0, 0), image[0] * 256 + image[1] + image[2] / 256 - 32768);
console.log('PASS · Terrarium RGB PNG decoding, all five PNG row filters, and elevation conversion.');
