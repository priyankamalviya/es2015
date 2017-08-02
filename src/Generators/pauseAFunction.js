function* generateLogger(){
  console.log("Start");
  yield
  console.log("end");
}

const logger = generateLogger();

logger.next();
//end wont appear in console. In order for 'end' to appear, we need to use logger.next again

logger.next();
