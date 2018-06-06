let js = {};

(function() {

  js.numToLoad = 0;
  js.numLoaded = 0;

  js.load = function() {
    js.numToLoad += arguments.length;
    for (let i = 0; i < arguments.length; i++)
      loadScript(arguments[i]);
  }

  function loadScript(script) {
    let scriptElem = document.createElement('script');
    scriptElem.src = script;
    document.body.appendChild(scriptElem);
    scriptElem.onload = callOnLoad;
  }

  function callOnLoad() {
    if (++js.numLoaded === js.numToLoad)
      js.onload();
  }

})();
