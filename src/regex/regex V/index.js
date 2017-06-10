'use strict';

var str = `Aeiou $100 55.5%`;
var regex = /[a-zA-Z0-9]/g; // This has a shorthand alternative, as below:
var regex = /\w/g; 
var regex = /\d/g; //digits only
var regex = /\s/g; //in between spaces only

const output = (str, regex, target ) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>` );
}

output(str, regex, document.querySelector('pre'))
