#!/usr/bin/env node

const path = require('path');
const appropriateImages = require('@mapbox/appropriate-images');
const imageConfig = require('../img/dist/image.config.json');

appropriateImages.createCli(imageConfig, {
    inputDirectory: path.join(__dirname, '../img/src'),
    outputDirectory: path.join(__dirname, '../img/dist')
});
