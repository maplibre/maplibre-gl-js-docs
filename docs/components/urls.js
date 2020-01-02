import { version } from '../../mapbox-gl-js/package.json';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';

function url(ext, options) {
    if (options && options.local && process.env.DEPLOY_ENV === 'local') {
        return prefixUrl(`/dist/mapbox-gl.${ext}`);
    } else {
        return `https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.${ext}`;
    }
}

function js(options) {
    return url('js', options);
}

function css(options) {
    return url('css', options);
}

export default { js, css };
