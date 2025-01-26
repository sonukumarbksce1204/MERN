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

async function fetchRepos(username,page){
    let data=await fetch('https://api.github.com/users/${username}/repos?per_page=5&page=${page}')
    let result=await data.json()
    let repolist=result.map((repo)=>`
        <div>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>Description : ${repo.discription||"No description availabe"}</p>
        </div>
    ` ).join("")
    document.getElementById("repos").innerHTML=repolist;
}


function setPagination(username, page,totalRepos){
    totalRepos=86;
    let pagination=document.getElementById("pagination");
    let prevBtn=document.createElement("button")
    prevBtn.innerHTML=`
        <button onclick="fetchRepos(${username},${page-1})" disable="${page===1?true:false}">Prev</button>
    `
    var btnCount=Math.ceil(totalRepos/5)
    pagination.appendChild(prevBtn)
    let nextBtn=document.createElement("button")
    nextBtn.innerHTML=`
    <button onclick="fetchRepos(${username},${page+1})" disable="${page===btnCount?true:false}">Prev</button>
    `
    pagination.appendChild(nextBtn)
}