/*---
title: Map
description: The Map object represents the map on your page. It exposes methods and properties that enable you to programmatically change the map, and fires events as users interact with it.
contentType: API
language:
- JavaScript
products:
- Mapbox GL JS
---*/

import React from 'react';
import PageWrapper from '../../components/api/page-wrapper.js';

export default class Page extends React.Component {
    render() {
        return <PageWrapper name="Map class" {...this.props} />;
    }
}
