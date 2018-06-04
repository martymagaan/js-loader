function foo() {
  var elem = document.createElement('p');
  var text = document.createTextNode('Function executed from foo.js');
  elem.appendChild(text);
  document.body.appendChild(elem);
}
