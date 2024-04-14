console.log("hi");
let item = document.getElementById("item");
let dbar=document.getElementById("dbar");
function card(r){
    let card =document.createElement("div");
    dbar.innerHTML="";
    card.innerHTML=`
    <div id="top">
        <img src= ${r.avatar_url} style=" height:30px">
        <br>
        <h3 id ="name">${r.name}</h3>
        <br>
        <a href="${r.html_url}">@${r.login}</a>
        <br>
        <p> ${r.created_at}</p>
        <br>
        <p> ${r.bio}</p>
        <br>
        <pre>
        Repos:${r.public_repos}
        followers:${r.followers}
        following:${r.following}
        location: ${r.location}
        linkedin: ${r.blog}
        twitter : ${r.twitter_username}
        hireable: ${r.hireable}
        </pre>
        


     </div>
    `
    dbar.style.height = "50%";
    dbar.appendChild(card);
    console.log(r.login);
    

}
async function show()
{
    let c= item.value;
    if(c==="")
    {
        alert("enter id");
        dbar.innerHTML=
        `<p>Please enter your github id above</p>`;
        return;
    }
    else
    {
    let svalue= await fetch(`https://api.github.com/users/${c}`);
    let response = await svalue.json();
    console.log(response);
       card(response);
    }

}