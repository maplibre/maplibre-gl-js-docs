import redirect from '../api-ref-redirect';
import patRoot from '../api-ref-redirect';

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
    ).toEqual(`${patRoot}/api/map/#map`);

    expect(
        redirect({
            hash: '#map#scrollzoom'
        })
    ).toEqual(`${patRoot}/api/map/#map#scrollzoom`);

    expect(
        redirect({
            hash: '#map.event:mouseover'
        })
    ).toEqual(`${patRoot}/api/map/#map.event:mouseover`);

    expect(
        redirect({
            hash: '#lnglat'
        })
    ).toEqual(`${patRoot}/api/geography/#lnglat`);

    expect(
        redirect({
            hash: '#icontrol'
        })
    ).toEqual(`${patRoot}/api/markers/#icontrol`);

    expect(
        redirect({
            hash: '#icontrol#getdefaultposition'
        })
    ).toEqual(`${patRoot}/api/markers/#icontrol#getdefaultposition`);

    expect(
        redirect({
            hash: '#touchpitchhandler#isenabled'
        })
    ).toEqual(`${patRoot}/api/handlers/#touchpitchhandler#isenabled`);

    expect(
        redirect({
            hash: '#canvassource#getcanvas'
        })
    ).toEqual(`${patRoot}/api/sources/#canvassource#getcanvas`);

    expect(
        redirect({
            hash: '#mapwheelevent'
        })
    ).toEqual(`${patRoot}/api/events/#mapwheelevent`);

    expect(
        redirect({
            hash: '#mapwheelevent#type'
        })
    ).toEqual(`${patRoot}/api/events/#mapwheelevent#type`);

    expect(
        redirect({
            hash: '#clearprewarmedresources'
        })
    ).toEqual(`${patRoot}/api/properties/#clearprewarmedresources`);
});
