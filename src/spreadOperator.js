function cast () {
  return ['left', ...arguments, 'right']
}
console.log(cast('a', 'b', 'c'))
