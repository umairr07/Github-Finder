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
                <div class="main-container mt-10 bg-gray-200 p-5 rounded-lg">
                    <div class="flex">
                    <img src="${data.avatar_url ? data.avatar_url : '-'}" alt="" class="h-28 rounded-full" />
                        <div class="flex justify-between gap-60 mt-8">
                            <div class="ml-10">
                                <p class="font-bold text-xl">${data.name ? data.name : '-'}</p>
                                <a class="mt-8" href="${data.html_url}">@${data.login ? data.login : '-'}</a>
                            </div>
                            <div class="inner-right mt-8">
                                <p>Joined ${data.created_at ? data.created_at : '-'}</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-10 text-lg">
                        <p>${data.bio ? data.bio : '-'}</p>
                    </div>

                    <div class="account flex justify-between mt-10 bg-white rounded-lg p-3">
                        <div class="repos">
                            <p class="font-bold">Repos</p>
                            <p>${data.public_repos ? data.public_repos : '-'}</p>
                        </div>
                        <div class="followers">
                            <p class="font-bold">Followers</p>
                            <p>${data.followers ? data.followers : '-'}</p>
                        </div>
                        <div class="following">
                            <p class="font-bold">Following</p>
                            <p>${data.following ? data.following : '-'}</p>
                        </div>
                    </div>

                    <div class="mt-10 mb-10">
                        <div >
                            <i class="fas fa-fw fa-map-marked-alt"></i>
                            <p class="pt-2">${data.location ? data.location : '-'}</p>
                            <i class="fab fa-fw fa-twitter"></i>
                            <p class="pt-2">${data.twitter_username ? data.twitter_username : '-'}</p>
                        
                        </div>
                        <div class="">
                            <i class="fas fa-fw fa-link"></i>
                            <p class="pt-2">${data.blog ? data.blog : '-'}</p>
                            <i class="fas fa-fw fa-building"></i>
                            <p class="pt-2">${data.company ? data.company : '-'}</p>
                        
                        </div>
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