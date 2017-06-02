let str = `This is a simple text.`

let regex = /.../gi;

const result = (str, regex, target) => {
  target.innerHTML = str.replace(regex, str =>  `<span>${str}</span>`);
}

result(str, regex, document.querySelector('pre'))



