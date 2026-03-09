'use strict';

function remake_gradient(){
    const orientation = core_storage_data.orientation;
    gradient = canvas_gradient({
      'args': [
        orientation === 1 ? canvas_properties.width : 0,
        orientation === 3 ? canvas_properties.height: 0,
        orientation === 0 ? canvas_properties.width : 0,
        orientation === 2 ? canvas_properties.height: 0,
      ],
      'stops': [
        {
          'color': core_storage_data.color_start,
        },
        {
          'color': core_storage_data.color_end,
          'offset': 1,
        },
      ],
    });
}

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
          canvas_properties.width,
          canvas_properties.height,
        ],
      ],
    });

    canvas_draw_path({
      'properties': {
        'fillStyle': core_storage_data.color_rectangle,
      },
      'vertices': [
        [
          'rect',
          x,
          y,
          core_storage_data.width,
          core_storage_data.height
        ],
      ],
    });
}

function repo_init(){
    core_repo_init({
      'events': {
        'remake': {
          'onclick': function(){
              remake_gradient();
              core_escape(false);
          },
        },
      },
      'globals': {
        'direction': 1,
        'gradient': 0,
        'x': 0,
        'y': 0,
      },
      'info': '<button class=medium id=remake type=button>Remake Gradient</button>',
      'storage': {
        'color_end': '#44cc44',
        'color_rectangle': '#226622',
        'color_start': '#000000',
        'direction': 0,
        'height': 200,
        'orientation': 0,
        'speed': 10,
        'width': 100,
      },
      'storage_menu': '<table><tr><td><input id=color_start type=color><input id=color_rectangle type=color><input id=color_end type=color><td>Colors'
        + '<tr><td class=right colspan=2><select id=orientation><option value=0>X+<option value=1>X-<option value=2>Y+<option value=3>Y-</select> Gradient Orientation'
        + '<tr><td class=right colspan=2><select id=direction><option value=0>X<option value=1>Y</select> Movement Direction'
        + '<tr><td><input id=speed min=1 step=any type=number><td>Speed'
        + '<tr><td><input id=height min=1 step=any type=number><td>Height'
        + '<tr><td><input id=width min=1 step=any type=number><td>Width</table>',
      'title': 'GradientIllusion.htm',
    });
    canvas_init();
}

function repo_logic(){
    if(core_storage_data.direction === 0){
        y = canvas_properties.height / 2 - core_storage_data.height / 2;
        x += direction * core_storage_data.speed;

        if(x <= 0){
            direction = 1;

        }else if(x >= canvas_properties.width - core_storage_data.width){
            direction = -1;
        }

    }else{
        x = canvas_properties.width / 2 - core_storage_data.width / 2;
        y += direction * core_storage_data.speed;

        if(y <= 0){
            direction = 1;

        }else if(y >= canvas_properties.height - core_storage_data.height){
            direction = -1;
        }
    }
}

function repo_resizelogic(){
    remake_gradient();
}
