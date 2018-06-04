js.load(
  'foo.js',
  'bar.js'
);

js.onload = function() {

  var button = document.getElementById('myButton');

  button.onclick = function() {
    foo();
    bar();
  };

};
