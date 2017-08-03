//send messages to and from JS generators
function* createHello(){
  const word = yield;
  
  console.log(word);
}

const hello = createHello();

//returns object
console.log(hello.next());

//returns value and object
console.log(hello.next('Max'));


