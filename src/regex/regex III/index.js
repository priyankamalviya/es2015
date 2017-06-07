'user strict';

var str = `https://www.codepen.io
http://codepen.io
not a web address
http://`;
var regex = /https{0,1}:\/\/.{1,}/g; //s{0,1} or s? takes s as optional
                                      // {1,} can be replaces with + sign

const output = (str, regex, target ) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>` );
}

output(str, regex, document.querySelector('pre'))
