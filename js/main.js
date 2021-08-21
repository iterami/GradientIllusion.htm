'use strict';

function draw_logic(){
    canvas_setproperties({
      'properties': {
        'fillStyle': canvas_gradient({
          'width': canvas_properties['width'],
          'stops': [
            {
              'color': core_storage_data['color-left'],
            },
            {
              'color': core_storage_data['color-right'],
              'offset': 1,
            },
          ],
        }),
      },
    });
    canvas_draw_path({
      'vertices': [
        {
          'type': 'moveTo',
        },
        {
          'x': canvas_properties['width'],
        },
        {
          'x': canvas_properties['width'],
          'y': canvas_properties['height'],
        },
        {
          'y': canvas_properties['height'],
        },
      ],
    });

    canvas_setproperties({
      'properties': {
        'fillStyle': core_storage_data['color-cuboid'],
      },
    });
    const half_cuboid = core_storage_data['height'] / 2;
    const half_height = canvas_properties['height'] / 2;
    canvas_draw_path({
      'vertices': [
        {
          'type': 'moveTo',
          'x': xposition,
          'y': half_height - half_cuboid,
        },
        {
          'x': xposition + core_storage_data['width'],
          'y': half_height - half_cuboid,
        },
        {
          'x': xposition + core_storage_data['width'],
          'y': half_height + half_cuboid,
        },
        {
          'x': xposition,
          'y': half_height + half_cuboid,
        },
      ],
    });
}

function logic(){
    xposition += xdirection * core_storage_data['speed'];

    if(xposition <= 0
      || xposition >= canvas_properties['width'] - core_storage_data['width']){
        xdirection *= -1;
    }
}

function repo_init(){
    core_repo_init({
      'globals': {
        'xdirection': 1,
        'xposition': 0,
      },
      'reset': canvas_setmode,
      'storage': {
        'color-cuboid': '#226622',
        'color-left': '#000000',
        'color-right': '#44cc44',
        'height': 200,
        'speed': 10,
        'width': 100,
      },
      'storage-menu': '<table><tr><td><input id="color-cuboid" type=color><td>Color cuboid'
        + '<tr><td><input id="color-left" type=color><td>Color Left'
        + '<tr><td><input id="color-right" type=color><td>Color Right'
        + '<tr><td><input id=height><td>Height'
        + '<tr><td><input id=speed><td>Speed'
        + '<tr><td><input id=width><td>Width</table>',
      'title': 'GradientIllusion.htm',
    });
    canvas_init();
}