function* makeGen(){
  const word = yield;
  console.log(`Hello ${word}`);
}

const hello = makeGen();
hello.next();

hello.throw('Something went wrong!');
