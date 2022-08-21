/*---
title: Events
description: Map (and some other classes) emit events in response to user interactions or changes in state. Evented is the interface used to bind and unbind listeners for these events.
contentType: API
order: 8
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
