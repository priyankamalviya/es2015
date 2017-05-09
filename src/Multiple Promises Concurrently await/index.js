async function fetchGithubUser(endpoint){
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUsersAndRepos(handle){
  const userPromise =fetchGithubUser(`/users/${handle}`);
  const reposPromise =fetchGithubUser(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;
  
  console.log(user.name);
  console.log(`${repos.length} repos`);
  
  document.getElementById("name").value = user.name;
  document.getElementById("location").value = `${repos.length} repos`;
}

showUsersAndRepos("priyankamalviya");
