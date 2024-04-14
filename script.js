let btn = document.getElementById('button')
let divCon = document.querySelector('.userSearch');
let search = document.getElementById('gitSearch')
let info = document.getElementById('userInfo')
let ptag = document.getElementById('pTag')

btn.addEventListener('click', function () {
    let val = search.value;
    console.log(val);

    if (val == "") {
        alert("Please enter your github username")
    } else {
        try {
            async function fetchApi() {
                let response = await fetch(`https://api.github.com/users/${val}`);

                let data = await response.json();
                console.log(data);


                let div = document.createElement('div');

                div.innerHTML = `
                <div class="main-container mt-10">
                    <div class="flex gap-56">
                        <div class="inner-left flex gap-5">
                            <img src="${data.avatar_url}" alt="" class="h-20" />
                            <a class="mt-8" href="${data.html_url}">@${data.login}</a>
                        </div>
                        <div class="inner-right mt-8">
                            <p>Joined ${data.created_at}</p>
                        </div>
                    </div>
    
                    <div class="account flex justify-between mt-10 bg-gray-300 rounded-lg p-3">
                        <div class="repos">
                            <p class="font-bold">Repos</p>
                            <p>${data.public_repos}</p>
                        </div>
                        <div class="followers">
                            <p class="font-bold">Followers</p>
                            <p>${data.followers}</p>
                        </div>
                        <div class="following">
                            <p class="font-bold">Following</p>
                            <p>${data.following}</p>
                        </div>
                    </div>
                </div>
                `
                info.appendChild(div);
                ptag.style.display = "none";
            }
            fetchApi();
        } catch (error) {
            console.log("Error");
        }
    }


})