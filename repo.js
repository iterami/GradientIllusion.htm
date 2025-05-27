'use strict';

function repo_drawlogic(){
    canvas_draw_path({
      'properties': {
        'fillStyle': gradient,
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
          x,
          y,
          core_storage_data['width'],
          core_storage_data['height']
        ],
      ],
    });
}

function repo_init(){
    core_repo_init({
      'globals': {
        'direction': 1,
        'gradient': 0,
        'x': 0,
        'y': 0,
      },
      'storage': {
        'color-left': '#000000',
        'color-rectangle': '#226622',
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

function repo_logic(){
    x += direction * core_storage_data['speed'];

    if(x <= 0){
        direction = 1;

    }else if(x >= canvas_properties['width'] - core_storage_data['width']){
        direction = -1;
    }
}

function repo_resizelogic(){
    gradient = canvas_gradient({
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
    });
    y = canvas_properties['height'] / 2 - core_storage_data['height'] / 2;
}
