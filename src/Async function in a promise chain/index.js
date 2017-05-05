// add async before function 
async function githubUser(users){
  const url = `https://api.github.com/users/${users}`;
  
  //use await keyword to wait till the promise is settled and fetch returns a response
  const response = await fetch(url);
  
  //now parse the body of response  & return it
  return await response.json();
  
  //the json method returns a promise as well. This means we can use await method to wait till this promise is settled too

}
githubUser("priyankamalviya")
  .then(user => {
  console.log(user.name);
    
  document.getElementById("email").value = user.name;
  
  document.getElementById("passwords").value = user.location;
});
