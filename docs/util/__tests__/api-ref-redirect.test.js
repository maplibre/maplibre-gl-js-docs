import redirect from '../api-ref-redirect';

const pathRoot = '/maplibre-gl-js'

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
    ).toEqual(`${pathRoot}/api/map/#map`);

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual(`${pathRoot}/api/map/#map#scrollzoom`);

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual(`${pathRoot}/api/map/#map.event:mouseover`);

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual(`${pathRoot}/api/geography/#lnglat`);

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual(`${pathRoot}/api/markers/#icontrol`);

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual(`${pathRoot}/api/markers/#icontrol#getdefaultposition`);

    expect(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        })
    ).toEqual(`${pathRoot}/api/handlers/#touchpitchhandler#isenabled`);

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual(`${pathRoot}/api/sources/#canvassource#getcanvas`);

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual(`${pathRoot}/api/events/#mapwheelevent`);

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual(`${pathRoot}/api/events/#mapwheelevent#type`);

    expect(
        redirect({
            hash: '#clearprewarmedresources'
        })
    ).toEqual(`${pathRoot}/api/properties/#clearprewarmedresources`);
});
