var d = Promise((resolve, reject) =>{
  setTimeOut(() => if(true){
  resolve('Hello World');
  }else{
  reject('Its an error');
  }, 2000);
  });
  
  d.then((data)=>console.log('success: ', data));
  d.catch((error) => console.error('error: ',error));
