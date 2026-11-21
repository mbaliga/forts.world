import zlib from 'node:zlib';

const PAETH = (a, b, c) => {
  const p = a + b - c, pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
  return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
};

export function decodeTerrariumPNG(png) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!png.subarray(0, 8).equals(signature)) throw new Error('Invalid PNG signature.');
  let width, height, bitDepth, colorType, interlace;
  const idat = [];
  for (let offset = 8; offset < png.length;) {
    const size = png.readUInt32BE(offset), type = png.toString('ascii', offset + 4, offset + 8);
    const data = png.subarray(offset + 8, offset + 8 + size);
    if (type === 'IHDR') {
      width = data.readUInt32BE(0); height = data.readUInt32BE(4);
      bitDepth = data[8]; colorType = data[9]; interlace = data[12];
    } else if (type === 'IDAT') idat.push(data);
    else if (type === 'IEND') break;
    offset += 12 + size;
  }
  if (!width || !height || bitDepth !== 8 || ![2, 6].includes(colorType) || interlace !== 0) {
    throw new Error(`Unsupported Terrarium PNG: ${width}x${height}, depth ${bitDepth}, color type ${colorType}, interlace ${interlace}.`);
  }
  const channels = colorType === 2 ? 3 : 4, stride = width * channels;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  if (raw.length !== (stride + 1) * height) throw new Error('PNG decompressed byte count does not match its dimensions.');
  const pixels = Buffer.alloc(stride * height);
  let source = 0;
  for (let y = 0; y < height; y++) {
    const filter = raw[source++], row = y * stride, prior = row - stride;
    if (filter > 4) throw new Error(`Unsupported PNG filter ${filter}.`);
    for (let x = 0; x < stride; x++) {
      const value = raw[source++], a = x >= channels ? pixels[row + x - channels] : 0;
      const b = y ? pixels[prior + x] : 0, c = y && x >= channels ? pixels[prior + x - channels] : 0;
      const predictor = filter === 0 ? 0 : filter === 1 ? a : filter === 2 ? b : filter === 3 ? Math.floor((a + b) / 2) : PAETH(a, b, c);
      pixels[row + x] = (value + predictor) & 255;
    }
  }
  return {
    width, height, channels, pixels,
    elevationAt(x, y) {
      const i = (y * width + x) * channels;
      return pixels[i] * 256 + pixels[i + 1] + pixels[i + 2] / 256 - 32768;
    },
  };
}
