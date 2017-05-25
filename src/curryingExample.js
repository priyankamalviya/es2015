/*Currying is a technique using partial evaluation*/



const add = R.curry((a, b) => a + b)
add(1, 2) // => 3
const add1 = add(1)
add1(2) // => 3
add1(10) // => 11
