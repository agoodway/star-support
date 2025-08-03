import { d as distExports } from './index_D95YBN9Q.mjs';
import fs, { mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { Buffer as Buffer$1 } from 'node:buffer';
import path from 'node:path';
import { d as decodeHTMLStrict } from './decode_CjSML27e.mjs';
import { a as allPages } from './content_DZ93dYAP.mjs';
import { r as rtlLanguages } from './languages_Cp4dsviI.mjs';
import { a as getLangFromSlug } from './path-utils_B_P5Ub86.mjs';

/**
 * shorthash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY';
const binary = dictionary.length;
// refer to: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
function bitwise(str) {
    let hash = 0;
    if (str.length === 0)
        return hash;
    for (let i = 0; i < str.length; i++) {
        const ch = str.charCodeAt(i);
        hash = (hash << 5) - hash + ch;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
function shorthash(text) {
    let num;
    let result = '';
    let integer = bitwise(text);
    const sign = integer < 0 ? 'Z' : ''; // If it's negative, start with Z, which isn't in the dictionary
    integer = Math.abs(integer);
    while (integer >= binary) {
        num = integer % binary;
        integer = Math.floor(integer / binary);
        result = dictionary[num] + result;
    }
    if (integer > 0) {
        result = dictionary[integer] + result;
    }
    return sign + result;
}

const { resolve } = createRequire(import.meta.url);
const debug = (...args) => console.debug('[astro-og-canvas]', ...args);
const error = (...args) => console.error('[astro-og-canvas]', ...args);
/** CanvasKit singleton. */
let canvasKitSingleton;
async function getCanvasKit() {
    if (!canvasKitSingleton) {
        try {
            const { default: init } = await import('canvaskit-wasm/full');
            canvasKitSingleton = await init({
                // TODO: Figure how to reliably resolve this without depending on Node.
                locateFile: (file) => resolve(`canvaskit-wasm/bin/full/${file}`),
            });
        }
        catch (e) {
            throw formatCanvasKitInitError(e);
        }
    }
    return canvasKitSingleton;
}
function formatCanvasKitInitError(e) {
    if (e instanceof Error && e.message.includes('__dirname is not defined')) {
        e.message +=
            '\n\n' +
                'This error is often thrown when using PNPM without installing `canvaskit-wasm` directly.\n' +
                'Install this required dependency by running `pnpm add canvaskit-wasm`\n';
    }
    return e;
}
class FontManager {
    /** Font data cache to avoid repeat downloads. */
    #cache = new Map();
    #hashCache = new Map();
    /** Promise to co-ordinate `#get` calls to run sequentially. */
    #loading = Promise.resolve();
    /** Current `CanvasKit.FontMgr` instance. */
    #manager;
    /** Instantiate a new `CanvasKit.FontMgr` instance with all the currently cached fonts. */
    async #updateManager() {
        const CanvasKit = await getCanvasKit();
        const fontData = Array.from(this.#cache.values()).filter((v) => !!v);
        this.#manager = CanvasKit.FontMgr.FromData(...fontData);
        // Log to the terminal which font families have been loaded.
        // Mostly useful so users can see the name of families as parsed by CanvasKit.
        const fontCount = this.#manager.countFamilies();
        const fontFamilies = [];
        for (let i = 0; i < fontCount; i++)
            fontFamilies.push(this.#manager.getFamilyName(i));
        debug('Loaded', fontCount, 'font families:\n' + fontFamilies.join(', '));
    }
    /**
     * Get a font manager instance for the provided fonts.
     *
     * Fonts are backed by an in-memory cache, so fonts are only downloaded once.
     *
     * Tries to avoid repeated instantiation of `CanvasKit.FontMgr` due to a memory leak
     * in their implementation. Will only reinstantiate if it sees a new font in the
     * `fontUrls` array.
     *
     * @param fontUrls Array of URLs to remote font files (TTF recommended).
     * @returns A font manager for all fonts loaded up until now.
     */
    async get(fontUrls) {
        await this.#loading;
        let hasNew = false;
        this.#loading = new Promise(async (resolve) => {
            for (const url of fontUrls) {
                if (this.#cache.has(url))
                    continue;
                hasNew = true;
                debug('Loading', url);
                if (/^https?:\/\//.test(url)) {
                    const response = await fetch(url);
                    if (response.ok) {
                        this.#cache.set(url, await response.arrayBuffer());
                    }
                    else {
                        this.#cache.set(url, undefined);
                        error(response.status, response.statusText, '—', url);
                    }
                }
                else {
                    const file = await fs.readFile(url);
                    this.#cache.set(url, file);
                }
            }
            resolve();
        });
        await this.#loading;
        if (hasNew)
            await this.#updateManager();
        return this.#manager;
    }
    /** Get a short hash for a given font resource. */
    getHash(url) {
        let hash = this.#hashCache.get(url) || '';
        if (hash)
            return hash;
        const buffer = this.#cache.get(url);
        hash = buffer ? shorthash(Buffer$1.from(buffer).toString()) : '';
        this.#hashCache.set(url, hash);
        return hash;
    }
}
const fontManager = new FontManager();
const images = { cache: new Map(), loading: Promise.resolve() };
/**
 * Load an image. Backed by an in-memory cache to avoid repeat disk-reads.
 * @param path Path to an image file, e.g. `./src/logo.png`.
 * @returns Buffer containing the image contents.
 */
const loadImage = async (path) => {
    await images.loading;
    let image;
    images.loading = new Promise(async (resolve) => {
        const cached = images.cache.get(path);
        if (cached) {
            image = cached;
        }
        else {
            // TODO: Figure out if there’s deno-compatible way to load images.
            const buffer = await fs.readFile(path);
            image = { buffer, hash: shorthash(buffer.toString()) };
            images.cache.set(path, image);
        }
        resolve();
    });
    await images.loading;
    return image;
};

const [width, height] = [1200, 630];
const edges = {
    top: [0, 0, width, 0],
    bottom: [0, height, width, height],
    left: [0, 0, 0, height],
    right: [width, 0, width, height],
};
const defaults = {
    border: {
        color: [255, 255, 255],
        width: 0,
        side: 'inline-start',
    },
    font: {
        title: {
            color: [255, 255, 255],
            size: 70,
            lineHeight: 1,
            weight: 'Normal',
            families: ['Noto Sans'],
        },
        description: {
            color: [255, 255, 255],
            size: 40,
            lineHeight: 1.3,
            weight: 'Normal',
            families: ['Noto Sans'],
        },
    },
};
class ImageCache {
    #dirCache = new Set();
    /** Ensure the requested directory exists. */
    async #mkdir(dir) {
        if (this.#dirCache.has(dir))
            return;
        try {
            await fs.mkdir(dir, { recursive: true });
            this.#dirCache.add(dir);
        }
        catch { }
    }
    /** Retrieve an image from the file system cache if it exists. */
    async get(cachePath) {
        await this.#mkdir(path.dirname(cachePath));
        return await fs.readFile(cachePath).catch(() => undefined);
    }
    /** Write an image to the file system cache. */
    async set(cachePath, image) {
        await this.#mkdir(path.dirname(cachePath));
        await fs.writeFile(cachePath, image).catch(() => undefined);
    }
}
const imageCache = new ImageCache();
async function generateOpenGraphImage({ cacheDir = './node_modules/.astro-og-canvas', title, description = '', dir = 'ltr', bgGradient = [[0, 0, 0]], bgImage, border: borderConfig = {}, padding = 60, logo, font: fontConfig = {}, fonts = ['https://api.fontsource.org/v1/fonts/noto-sans/latin-400-normal.ttf'], format = 'PNG', quality = 90, }) {
    // Load and configure font families.
    const fontMgr = await fontManager.get(fonts);
    const loadedLogo = logo && (await loadImage(logo.path));
    const loadedBg = bgImage && (await loadImage(bgImage.path));
    /** A deterministic hash based on inputs. */
    const hash = shorthash(distExports.deterministicString([
        title,
        description,
        dir,
        bgGradient,
        bgImage,
        borderConfig,
        padding,
        logo,
        fontConfig,
        fonts,
        quality,
        loadedLogo?.hash,
        loadedBg?.hash,
        fonts.map((font) => fontManager.getHash(font)),
    ]));
    let cacheFilePath;
    if (cacheDir) {
        cacheFilePath = path.join(cacheDir, `${hash}.${format.toLowerCase()}`);
        const cached = await imageCache.get(cacheFilePath);
        if (cached)
            return cached;
    }
    const border = { ...defaults.border, ...borderConfig };
    const font = {
        title: { ...defaults.font.title, ...fontConfig.title },
        description: { ...defaults.font.description, ...fontConfig.description },
    };
    const isRtl = dir === 'rtl';
    const margin = {
        'block-start': padding,
        'block-end': padding,
        'inline-start': padding,
        'inline-end': padding,
    };
    margin[border.side] += border.width;
    const CanvasKit = await getCanvasKit();
    const textStyle = (fontConfig) => ({
        color: CanvasKit.Color(...fontConfig.color),
        fontFamilies: fontConfig.families,
        fontSize: fontConfig.size,
        fontStyle: { weight: CanvasKit.FontWeight[fontConfig.weight] },
        heightMultiplier: fontConfig.lineHeight,
    });
    // Set up.
    const surface = CanvasKit.MakeSurface(width, height);
    const canvas = surface.getCanvas();
    // Draw background gradient.
    const bgRect = CanvasKit.XYWHRect(0, 0, width, height);
    const bgPaint = new CanvasKit.Paint();
    bgPaint.setShader(CanvasKit.Shader.MakeLinearGradient([0, 0], [0, height], bgGradient.map((rgb) => CanvasKit.Color(...rgb)), null, CanvasKit.TileMode.Clamp));
    canvas.drawRect(bgRect, bgPaint);
    // Draw border.
    if (border.width) {
        const borderStyle = new CanvasKit.Paint();
        borderStyle.setStyle(CanvasKit.PaintStyle.Stroke);
        borderStyle.setColor(CanvasKit.Color(...border.color));
        borderStyle.setStrokeWidth(border.width * 2);
        const borders = {
            'block-start': edges.top,
            'block-end': edges.bottom,
            'inline-start': isRtl ? edges.right : edges.left,
            'inline-end': isRtl ? edges.left : edges.right,
        };
        canvas.drawLine(...borders[border.side], borderStyle);
    }
    // Draw background image.
    if (bgImage && loadedBg?.buffer) {
        const bgImg = CanvasKit.MakeImageFromEncoded(loadedBg.buffer);
        if (bgImg) {
            let { position = 'center', fit = 'none' } = bgImage;
            if (typeof position === 'string')
                position = [position, position];
            const [bgW, bgH] = [bgImg.width(), bgImg.height()];
            let [targetW, targetH] = [bgW, bgH];
            if (fit === 'fill') {
                [targetW, targetH] = [width, height];
            }
            else if (fit === 'cover') {
                const ratio = bgW / width < bgH / height ? width / bgW : height / bgH;
                [targetW, targetH] = [bgW * ratio, bgH * ratio];
            }
            else if (fit === 'contain') {
                const ratio = bgW / width > bgH / height ? width / bgW : height / bgH;
                [targetW, targetH] = [bgW * ratio, bgH * ratio];
            }
            const [blockAlign, inlineAlign] = position;
            const targetX = inlineAlign === 'start'
                ? 0
                : inlineAlign === 'end'
                    ? width - targetW
                    : (width - targetW) / 2;
            const targetY = blockAlign === 'start'
                ? 0
                : blockAlign === 'end'
                    ? height - targetH
                    : (height - targetH) / 2;
            // Draw image
            const srcRect = CanvasKit.XYWHRect(0, 0, bgW, bgH);
            const destRect = CanvasKit.XYWHRect(targetX, targetY, targetW, targetH);
            canvas.drawImageRect(bgImg, srcRect, destRect, new CanvasKit.Paint());
        }
    }
    // Draw logo.
    let logoHeight = 0;
    if (logo && loadedLogo?.buffer) {
        const img = CanvasKit.MakeImageFromEncoded(loadedLogo.buffer);
        if (img) {
            const logoH = img.height();
            const logoW = img.width();
            const targetW = logo.size?.[0] ?? logoW;
            const targetH = logo.size?.[1] ?? (targetW / logoW) * logoH;
            const xRatio = targetW / logoW;
            const yRatio = targetH / logoH;
            logoHeight = targetH;
            // Matrix transform to scale the logo to the desired size.
            const imagePaint = new CanvasKit.Paint();
            imagePaint.setImageFilter(CanvasKit.ImageFilter.MakeMatrixTransform(CanvasKit.Matrix.scaled(xRatio, yRatio), { filter: CanvasKit.FilterMode.Linear }, null));
            const imageLeft = isRtl
                ? (1 / xRatio) * (width - margin['inline-start']) - logoW
                : (1 / xRatio) * margin['inline-start'];
            canvas.drawImage(img, imageLeft, (1 / yRatio) * margin['block-start'], imagePaint);
        }
    }
    if (fontMgr) {
        // Create paragraph with initial styles and add title.
        const paragraphStyle = new CanvasKit.ParagraphStyle({
            textAlign: isRtl ? CanvasKit.TextAlign.Right : CanvasKit.TextAlign.Left,
            textStyle: textStyle(font.title),
            textDirection: isRtl ? CanvasKit.TextDirection.RTL : CanvasKit.TextDirection.LTR,
        });
        const paragraphBuilder = CanvasKit.ParagraphBuilder.Make(paragraphStyle, fontMgr);
        paragraphBuilder.addText(decodeHTMLStrict(title));
        // Add small empty line betwen title & description.
        paragraphBuilder.pushStyle(new CanvasKit.TextStyle({ fontSize: padding / 3, heightMultiplier: 1 }));
        paragraphBuilder.addText('\n\n');
        // Add description.
        paragraphBuilder.pushStyle(new CanvasKit.TextStyle(textStyle(font.description)));
        paragraphBuilder.addText(decodeHTMLStrict(description));
        // Draw paragraph to canvas.
        const para = paragraphBuilder.build();
        const paraWidth = width - margin['inline-start'] - margin['inline-end'] - padding;
        para.layout(paraWidth);
        const paraLeft = isRtl
            ? width - margin['inline-start'] - para.getMaxWidth()
            : margin['inline-start'];
        const minTop = margin['block-start'] + logoHeight + (logoHeight ? padding : 0);
        const maxTop = minTop + (logoHeight ? padding : 0);
        const naturalTop = height - margin['block-end'] - para.getHeight();
        const paraTop = Math.max(minTop, Math.min(maxTop, naturalTop));
        canvas.drawParagraph(para, paraLeft, paraTop);
    }
    // Render canvas to a buffer.
    const image = surface.makeImageSnapshot();
    const imageBytes = image.encodeToBytes(CanvasKit.ImageFormat[format], quality) || new Uint8Array();
    // Free any memory our surface might be hanging onto.
    surface.dispose();
    const imgBuffer = Buffer$1.from(imageBytes);
    if (cacheFilePath)
        await imageCache.set(cacheFilePath, imgBuffer);
    return imgBuffer;
}

const pathToSlug = (path) => {
    path = path.replace(/^\/src\/pages\//, '');
    path = path.replace(/\.[^\.]*$/, '') + '.png';
    path = path.replace(/\/index\.png$/, '.png');
    return path;
};
function makeGetStaticPaths({ pages, param, getSlug = pathToSlug, }) {
    const slugs = Object.entries(pages).map((page) => getSlug(...page));
    const paths = slugs.map((slug) => ({ params: { [param]: slug } }));
    return function getStaticPaths() {
        return paths;
    };
}
function createOGImageEndpoint({ getSlug = pathToSlug, ...opts }) {
    return async function getOGImage({ params }) {
        const pageEntry = Object.entries(opts.pages).find((page) => {
            const slug = getSlug(...page);
            return slug === params[opts.param] || slug.replace(/^\//, "") === params[opts.param];
        });
        if (!pageEntry)
            return new Response('Page not found', { status: 404 });
        return new Response(await generateOpenGraphImage(await opts.getImageOptions(...pageEntry)));
    };
}
function OGImageRoute(opts) {
    return {
        getStaticPaths: makeGetStaticPaths(opts),
        GET: createOGImageEndpoint(opts),
    };
}

async function fetchBrandFont() {
  try {
    if (!undefined                                ) {
      throw new Error(
        "FONT_CREDENTIALS environment variable not defined. Please set it to download Astro’s brand font."
      );
    }
    const fontPath = "_fonts/brand/";
    const fontFileName = "brand-500-normal.otf";
    const fontDir = path.resolve("./src/pages/open-graph/", fontPath);
    const fontFile = path.resolve(fontDir, fontFileName);
    console.log("Downloading brand font");
    const fontArrayBuffer = await fetch(
      "https://fonts-cdn.astro.build/Obviously/Obviously Normal/Desktop/Obviously-Medium.otf",
      JSON.parse(undefined                                )
    ).then((res) => res.arrayBuffer());
    console.log("Creating directory", fontDir);
    await mkdir(fontDir, { recursive: true });
    console.log("Saving file", fontFile);
    await writeFile(fontFile, Buffer.from(fontArrayBuffer));
    return fontFile;
  } catch (error) {
  }
}

const brandFont = await fetchBrandFont();
const paths = process.env.SKIP_OG ? [] : allPages;
const pages = Object.fromEntries(
  paths.map(
    ({ filePath, id, data }) => [filePath, { data, id }]
  )
);
const { getStaticPaths, GET } = OGImageRoute({
  param: "path",
  pages,
  getSlug(_, page) {
    return page.id + ".webp";
  },
  getImageOptions: async (_, { data, id }) => {
    const isRtl = rtlLanguages.has(getLangFromSlug(id));
    return {
      format: "WEBP",
      quality: 90,
      title: data.title,
      description: data.description,
      dir: isRtl ? "rtl" : "ltr",
      logo: {
        path: "./src/pages/open-graph/_images/docs-logo.png",
        size: [300]
      },
      border: { width: 32, side: "inline-start" },
      padding: 80,
      bgImage: {
        path: `./src/pages/open-graph/_images/background-${isRtl ? "rtl" : "ltr"}.png`
      },
      font: {
        title: {
          size: 72,
          lineHeight: 1.2,
          families: [
            "Obviously",
            "Inter",
            "Noto Sans",
            "Noto Sans Arabic",
            "Noto Sans SC",
            "Noto Sans TC",
            "Noto Sans JP",
            "Noto Sans KR"
          ],
          weight: "Medium",
          color: [255, 255, 255]
        },
        description: {
          size: 42,
          lineHeight: 1.2,
          families: [
            "Inter",
            "Noto Sans",
            "Noto Sans Arabic",
            "Noto Sans SC",
            "Noto Sans TC",
            "Noto Sans JP",
            "Noto Sans KR"
          ],
          weight: "Normal",
          color: [191, 193, 201]
        }
      },
      fonts: [
        brandFont,
        "./src/pages/open-graph/_fonts/inter/inter-400-normal.ttf",
        "./src/pages/open-graph/_fonts/inter/inter-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/noto-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/noto-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-simplified-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/chinese-traditional-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/japanese-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/japanese-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/arabic-400-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/arabic-500-normal.ttf",
        "./src/pages/open-graph/_fonts/noto-sans/korean-400-normal.otf",
        "./src/pages/open-graph/_fonts/noto-sans/korean-500-normal.ttf"
      ].filter((val) => typeof val === "string")
    };
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, getStaticPaths as g };
