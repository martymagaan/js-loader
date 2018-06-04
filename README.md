# JS Loader

A simple pure javascript tool for including separate js files programmatically.

**See [demo.html](http://projects.martymagaan.com/js-loader/demo/demo.html) file to see it in action.**

## How To Use

Link js file in your HTML

    <script src="path-to/js-loader.js"></script>

Example:

    js.load(
      'js/script1.js',
      'js/script2.js',
      'js/script3.js'
    };

    js.onload = function() {

      // Use objects and functions from the scripts loaded above

    };