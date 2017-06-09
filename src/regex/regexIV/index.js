var str = `cat mat bat hat *at 0at`;

//we can place characters in square brackets to replesent optional character set. Order is not important here. We can also negate characters by adding a charat(^) at the beginning; We can also have character set ranges (a-z or A-Z for ex.)
var regex = /[cb]at/g;
//var regex = /[^cb]at/g;

const output = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str => `<span>${str}</span>`)
}

output(str, regex, document.querySelector('pre'));
