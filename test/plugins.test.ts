import fs from 'fs';
import categories from '../docs/data/plugins.json';

function isUrl(value) {
    const regex = /^(https?:\/\/)?[\w,%-\\.]+\/?$/;
    return regex.test(value);
}

Object.keys(categories).forEach((category) => {
    describe(`Plugin category: ${category}`, () => {
        test('category name starts with uppercase letter', () => {
            expect(category[0]).toEqual(category[0].toUpperCase());
        });
    });
    const plugins = categories[category];
    Object.keys(plugins).forEach((plugin) => {
        describe(`Plugin: ${plugin}`, () => {
            test('plugin', () => {
                const meta = plugins[plugin];
                expect(typeof plugin).toEqual('string');
                expect(meta.description).toBeTruthy(); // `${plugin} has \`description\``);
                expect(meta.description.endsWith('.')).toBeTruthy(); // `${plugin} \`description\` ends with period`

                //${plugin} \`description\` starts with uppercase letter
                expect(meta.description[0]).toEqual(
                    meta.description[0].toUpperCase()
                );
                expect(meta.website).toBeTruthy(); // `${plugin} has \`website\``);
                expect(isUrl(meta.website)).toBeTruthy(); // `${plugin} \`website\` is a url`);
                if (meta.example) {
                    const path = `./docs/pages/example/${meta.example}.md`;
                    expect(fs.existsSync(path)).toBeTruthy(); // `example ${path} exists`);
                }
            });
        });
    });
});
