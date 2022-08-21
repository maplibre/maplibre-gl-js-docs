/*---
title: Map
description: The Map object represents the map on your page. It exposes methods and properties that enable you to programmatically change the map, and fires events as users interact with it.
contentType: API
order: 2
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
        return <PageWrapper name="Map class" {...this.props} />;
    }
}

