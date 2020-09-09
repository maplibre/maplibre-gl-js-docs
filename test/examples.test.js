const test = require('tape');
const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');

const readPost = (filename) => {
    const buffer = fs.readFileSync(filename),
        file = buffer.toString('utf8');

    try {
        const parts = file.split(/---\s*[*\n^]/g),
            frontmatter = parts[1];
        return {
            name: filename,
            file,
            metadata: frontmatter ? jsyaml.safeLoad(frontmatter) : null,
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
        const { metadata, file } = readPost(example);

        if (metadata) {
            test(`Example metatdata: ${example}`, (t) => {
                t.ok(metadata.topics, 'has topics');
                t.end();
            });

            test(`Example thumbnail: ${example}`, (t) => {
                t.ok(metadata.thumbnail, 'has thumbnail');
                const imagePathSrc = `./docs/img/src/${metadata.thumbnail}.png`;
                t.ok(
                    fs.existsSync(imagePathSrc),
                    `example must have an image located at: ${imagePathSrc}`
                );

                t.end();
            });
        }
        test(`Example content: ${example}`, (t) => {
            const viewport = file.match(
                /{{{\s?<Example html={html} {...this.props}\s?|\/>\s?}}/gim
            );
            t.ok(
                viewport,
                `Content must include: {{ <Example html={html} {...this.props} /> }}`
            );
            t.end();
        });
    });

// Test .html files
listExamplesHtml('./docs/pages/example/').forEach((example) => {
    const file = readPost(example);
    test(`Example: ${example}`, (t) => {
        t.ok(
            !file.file.includes('pk.ey'),
            'do not hardcode access tokens, an access token will be appended automatically'
        );
        t.end();
    });
});
