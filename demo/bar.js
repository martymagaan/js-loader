function bar() {
  var elem = document.createElement('p');
  var text = document.createTextNode('Function executed from bar.js');
  elem.appendChild(text);
  document.body.appendChild(elem);
}

