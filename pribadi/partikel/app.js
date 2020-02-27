/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles":{
        "number":{
            "value":125
        },
        "color":{
            "value":"#f9f3f4"
        },
        "shape":{
            "type":"circle",
            "stroke":{
                "width":3,
                "color":"#ccc"
            }
        },
        "opacity":{
            "value":0.5,
            "random":true
        },
        "size":{
            "value":3
        },
        "line_linked":{
            "enable":true,
            "distance":100
        },
        "move":{
            "enable":true,
            "speed": 2.5
        }
    }
}

);
