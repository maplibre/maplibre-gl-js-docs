import {chromium} from 'playwright';
import path from 'path';
import pack from '../../maplibre-gl-js/package.json' assert { type: 'json' };
import fs from 'fs';

const fileName = process.argv[2];
const token =
    process.argv[3] ||
    process.env.MAPBOX_ACCESS_TOKEN ||
    process.env.MapboxAccessToken;

if (!token || !fileName) {
    throw new Error(
        '\n  Usage: npm run create-image <file-name> <mapbox-access-token>\nExample: npm run create-image 3d-buildings pk000011110000111100001111\n\n'
    );
}

// strip file extension from file name
const fileNameFormatted = fileName.replace('.html', '').replace('.js', '');
// get the example contents/snippet

const snippet = fs.readFileSync(
    path.resolve(
        __dirname,
        '..',
        'pages',
        'example',
        `${fileNameFormatted}.html`
    ),
    'utf-8'
);
// create an HTML page to display the example snippet
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v${pack.version}/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v${pack.version}/mapbox-gl.css' rel='stylesheet' />
<style>
body { margin:0; padding:0; }
#map { position: absolute; top:0; bottom:0; width: 600px; max-height: 300px; }
</style>
</head>
<body>
<script>
mapboxgl.accessToken = '${token}';
</script>
${snippet}
</body>
</html>`;

// initilize puppeteer
(async () => {
    const browser = await chromium.launch();
    let page = await browser.newPage();
    // set html for page and then wait until mapbox-gl-js loads
    await page.setContent(html, { waitUntil: 'networkidle' }); // eslint-disable-line
    // set viewport and double deviceScaleFactor to get a closer shot of the map

    const context = await browser.newContext({
      viewport: {width: 600, height: 600},
      deviceScaleFactor: 2,
    });

    page = await context.newPage();


    // create screenshot
    await page
        .screenshot({
            path: `./docs/img/src/${fileNameFormatted}.png`,
            type: 'png',
            clip: {
                x: 0,
                y: 0,
                width: 600,
                height: 250
            }
        })
        .then(() =>
            console.log(`Created ./docs/img/src/${fileNameFormatted}.png`)
        )
        .catch((err) => {
            console.log(err);
        });
    await browser.close();
})();