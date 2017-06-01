'use strict';

let str = `She sells sea shells on the sea shore`;

//var regex = new RegExp('se', 'g');

var regex= /se/g;

// returns true or false
//console.log(regex.test(str));

// to get more info about our pattern
console.log(regex.exec(str));
console.log(regex.exec(str));

// look for the pattern and replace with 'XX'
console.log(str.replace(regex, str => 'XX'));

// use string prototype to find index of the first pattern found
console.log(str.search(regex));

// create a method called result

const result = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str =>  `<span>${str}</span>`);
}

result(str, regex, document.querySelector('pre'))
