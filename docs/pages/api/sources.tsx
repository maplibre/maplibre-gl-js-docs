/*---
title: Sources
description: Sources specify the geographic features to be rendered on the map. Source objects may be obtained from Map#getSource.
contentType: API
order: 7
layout: page
language:
- JavaScript
products:
- MapLibre GL JS
---*/

import React from 'react';
import PageWrapper, { ApiProps } from '../../components/api/page-wrapper.js';

export default class Page extends React.Component<ApiProps> {
    render() {
        return <PageWrapper {...this.props} />;
    }
}
