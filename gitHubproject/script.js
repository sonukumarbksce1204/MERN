function fetchUserInfo(username){
    fetch('https://api.github.com/users/${username}/')
    .then(response=>response.json())
    .then(data=>{
        document.getElementById("Overview").innerHTML=`
            <div>
                <img width="150px" height="150px" src="${data.avatar-url}" alt="${data.login}">
                <h2>${data.login}<\h2>
                <p>Followers:${data.followers}</p>
                <p>Following:${data.following}</p>
                <p>Pubilc Repositories: ${data.public_repos}</p>
            </div>
        `
    })
}
document.getElementById("search-btn").addEventListener("click",(e)=>{
    e.preventDefault();
    const username=document.getElementById("username").value;
    if(username){
        fetchUserInfo(username)
    }
})