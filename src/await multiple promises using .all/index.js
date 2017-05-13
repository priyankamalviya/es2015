async function fetchFromGithub(endpoint){
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUsersAndRepos(handle){
 const [user, repos] = await Promise.all([
   fetchFromGithub(`/users/${handle}`),
   fetchFromGithub(`/users/${handle}/repos`)
 ]);

  console.log(user.name);
  
  document.getElementById("name").value =user.name;
  
  document.getElementById("location").innerHTML = `${repos.length} repos`;

}

showUsersAndRepos("priyankamalviya");
