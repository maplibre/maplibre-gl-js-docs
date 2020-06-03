import redirect from '../api-ref-redirect';

it(`api-ref-redirect`, () => {
    expect(
        redirect({
            hash: '#poptarts'
        })
    ).toEqual(undefined);

    expect(
        redirect({
            hash: '#map'
        })
    ).toEqual('/mapbox-gl-js/api/map/#map');

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual('/mapbox-gl-js/api/map/#map#scrollzoom');

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual('/mapbox-gl-js/api/map/#map.event:mouseover');

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual('/mapbox-gl-js/api/geography/#lnglat');

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual('/mapbox-gl-js/api/markers/#icontrol');

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual('/mapbox-gl-js/api/markers/#icontrol#getdefaultposition');

    expect(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        })
    ).toEqual('/mapbox-gl-js/api/handlers/#touchpitchhandler#isenabled');

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual('/mapbox-gl-js/api/sources/#canvassource#getcanvas');

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual('/mapbox-gl-js/api/events/#mapwheelevent');

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual('/mapbox-gl-js/api/events/#mapwheelevent#type');

    expect(
        redirect({
            hash: '#clearprewarmedresources'
        })
    ).toEqual('/mapbox-gl-js/api/properties/#clearprewarmedresources');
});
