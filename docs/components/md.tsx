import { remark } from 'remark';
import reactRenderer from 'remark-react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { createElement, Fragment } from 'react';

export default function md(str) {
    let content;
    remark()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, { createElement, Fragment })
        .process(str)
        .then((file) => {
            content = file.result;
        });

    return content;
}
