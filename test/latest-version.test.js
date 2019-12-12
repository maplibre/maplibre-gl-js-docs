const test = require('tape');
const path = require('path');
const helpers = require('./helpers');

let tags = [];

async function tagsMatch() {
    await process.chdir(path.join(process.cwd(), './mapbox-gl-js'));
    const latest = await helpers.latestStableTag();
    const current = await helpers.currentTag();
    if (latest === current) {
        await process.chdir(path.join(process.cwd(), '..'));
        return true;
    } else {
        await process.chdir(path.join(process.cwd(), '..'));
        tags.push(latest);
        tags.push(current);
        return false;
    }
}

test(`Is latest version`, t => {
    tagsMatch().then(res => {
        t.ok(
            res,
            `Mapbox GL JS submodule is not pinned to the latest stable release version.
             Latest: ${tags[0]}. Currently checked out: ${tags[1]}.
             Check out the most recent with:
             "git checkout tags/${tags[0]}"`
        );
        t.end();
    });
});
