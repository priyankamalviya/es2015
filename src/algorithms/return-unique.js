/* this function returns unique elements from a list*/

let arr =[7, 4, 6, 6, 2, 5, 9, 8, 1];

let result = arr.filter( (elem, index, self) => {
  console.log(elem, index, self);
  return index === self.indexOf(elem);
});
console.log(result);
