const test = require('tape');
const fs = require('fs');
const categories = require('../docs/data/plugins.json');

function isUrl(value) {
    const regex = /^(https?:\/\/)?[\w,%-\\.]+\/?$/;
    return regex.test(value);
}

Object.keys(categories).forEach(category => {
    test(`Plugin category: ${category}`, t => {
        t.equal(
            category[0],
            category[0].toUpperCase(),
            'category name starts with uppercase letter'
        );
        t.end();
    });
    const plugins = categories[category];
    Object.keys(plugins).forEach(plugin => {
        test(`Plugin: ${plugin}`, t => {
            const meta = plugins[plugin];
            t.equal(typeof plugin, 'string');
            t.ok(meta.description, `${plugin} has \`description\``);
            t.ok(
                meta.description.endsWith('.'),
                `${plugin} \`description\` ends with period`
            );
            t.equal(
                meta.description[0],
                meta.description[0].toUpperCase(),
                `${plugin} \`description\` starts with uppercase letter`
            );
            t.ok(meta.website, `${plugin} has \`website\``);
            t.ok(isUrl(meta.website), `${plugin} \`website\` is a url`);
            if (meta.example) {
                const path = `./docs/pages/example/${meta.example}.md`;
                t.ok(fs.existsSync(path), `example ${path} exists`);
            }
            t.end();
        });
    });
});
