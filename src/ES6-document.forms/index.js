//console.log(document.forms.norm);

//get an array of checked toppings

const toppings = Array
  .from(document.forms.norm.toppings)
  .filter(input => input.checked)
  .map(input => input.value);

document.write("Selected toppings are :", toppings);

console.log(toppings);
