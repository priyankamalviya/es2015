async function fetchGithubUser(endpoint){
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUsersAndRepos(handle){
  const user = await fetchGithubUser(`/users/${handle}`);
  const repos = await fetchGithubUser(`/users/${handle}/repos`);

  
  console.log(user.name);
  console.log(`${repos.length} repos`);
  document.getElementById("name").value = user.name;
  document.getElementById("location").value = `${repos.length} repos`;
}

showUsersAndRepos("priyankamalviya");
