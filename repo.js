'use strict';

function repo_drawlogic(){
    canvas_draw_path({
      'properties': {
        'fillStyle': canvas_gradient({
          'args': [
            0,
            0,
            canvas_properties['width'],
            0,
          ],
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
      'vertices': [
        [
          'rect',
          0,
          0,
          canvas_properties['width'],
          canvas_properties['height'],
        ],
      ],
    });

    canvas_draw_path({
      'properties': {
        'fillStyle': core_storage_data['color-rectangle'],
      },
      'vertices': [
        [
          'rect',
          xposition,
          canvas_properties['height'] / 2 - core_storage_data['height'] / 2,
          core_storage_data['width'],
          core_storage_data['height']
        ],
      ],
    });
}

function repo_logic(){
    xposition += xdirection * core_storage_data['speed'];

    if(xposition <= 0){
        xdirection = 1;

    }else if(xposition >= canvas_properties['width'] - core_storage_data['width']){
        xdirection = -1;
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
        'color-rectangle': '#226622',
        'color-left': '#000000',
        'color-right': '#44cc44',
        'height': 200,
        'speed': 10,
        'width': 100,
      },
      'storage-menu': '<table><tr><td><input id=color-rectangle type=color><td>Color Rectangle'
        + '<tr><td><input id=color-left type=color><td>Color Left'
        + '<tr><td><input id=color-right type=color><td>Color Right'
        + '<tr><td><input class=mini id=height min=1 step=any type=number><td>Height'
        + '<tr><td><input class=mini id=speed min=1 step=any type=number><td>Speed'
        + '<tr><td><input class=mini id=width min=1 step=any type=number><td>Width</table>',
      'title': 'GradientIllusion.htm',
    });
    canvas_init();
}
