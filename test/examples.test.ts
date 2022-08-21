import fs from 'fs';
import path from 'path';
import jsyaml from 'js-yaml';

const readPost = (filename) => {
    const buffer = fs.readFileSync(filename),
        file = buffer.toString('utf8');

    try {
        const parts = file.split(/---\s*[*\n^]/g),
            frontmatter = parts[1];
        return {
            name: filename,
            file,
            metadata: frontmatter ? jsyaml.load(frontmatter) : null,
            content: parts[2]
        };
    } catch (err) {
        return new Error(
            `\nCould not read metadata, check the syntax of the metadata and front matter: ${filename}`
        );
    }
};

const listExamplesMd = (dir) => {
    const files = fs.readdirSync(`${dir}`);
    return files.reduce((arr, file) => {
        if (path.extname(file) === '.md') {
            arr.push(`${dir}${file}`);
        }
        return arr;
    }, []);
};

const listExamplesHtml = (dir) => {
    const files = fs.readdirSync(`${dir}`);
    return files.reduce((arr, file) => {
        if (path.extname(file) === '.html') {
            arr.push(`${dir}${file}`);
        }
        return arr;
    }, []);
};

// Test md files
listExamplesMd('./docs/pages/example/')
    .filter((example) => example !== './docs/pages/example/index.md')
    .forEach((example) => {
        //@ts-ignore
        const { metadata, file } = readPost(example);

        if (metadata) {
            describe(`Example topics: ${example}`, () => {
                test('has topics', () => {
                    expect(metadata.topics).toBeTruthy();
                });
            });

            describe(`Example description: ${example}`, () => {
                const regex = /\[|]|`/g;
                test('description is plain text and does not use markdown', () => {
                    expect(!metadata.description.match(regex)).toBeTruthy();
                });
            });

            describe(`Example thumbnail: ${example}`, () => {
                test('has thumbnail', () => {
                    expect(metadata.thumbnail).toBeTruthy();
                });

                test('example must have an image located at: ${imagePathSrc}', () => {
                    //example must have an image located at: ${imagePathSrc}`
                    const imagePathSrc = `./docs/img/src/${metadata.thumbnail}.png`;
                    expect(fs.existsSync(imagePathSrc)).toBeTruthy;
                });
            });
        }
        describe(`Example content: ${example}`, () => {
            const viewport = file.match(
                /{{{\s?<Example html={html} {...this.props}\s?|\/>\s?}}/gim
            );
            test(`Content must include: {{ <Example html={html} {...this.props} /> }}`, () => {
                expect(viewport).toBeTruthy();
            });
        });
    });

// Test .html files
listExamplesHtml('./docs/pages/example/').forEach((example) => {
    const file = readPost(example);
    describe(`Example: ${example}`, () => {
        test('do not hardcode access tokens, an access token will be appended automatically', () => {
            expect(
                //@ts-ignore
                !file.file.includes('pk.ey')
            ).toBeTruthy();
        });
    });
});
