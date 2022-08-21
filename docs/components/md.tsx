import { remark } from 'remark';
import reactRenderer from 'remark-react';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { createElement, Fragment } from 'react';

export default function md(str) {
    let content;
    unified()
        .use(rehypeParse, { fragment: true })
        .use(rehypeReact, { createElement, Fragment })
        .process(str)
        .then((file) => {
            content = file.result;
        });

    return content;
}