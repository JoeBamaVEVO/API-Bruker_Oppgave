async function getUsers() {
    let response = await fetch('/users?results=100');
    let users = await response.json();
    console.log(users[0])
    
    for (let user of users) {
        ListUsers(user)
        console.log(user);
    }
}

function ListUsers(user) {
    let flexContainer = document.getElementById('users');
    // Lager diven som skal inneholde brukerinformasjon
    let userDiv = document.createElement('div');
    userDiv.className = 'user';

    let userImg = document.createElement('img');
    userImg.src = user.picture.large;
    userImg.className = 'pfp';

    let userName = document.createElement('h3');
    userName.innerHTML = `${user.name.first} <br> ${user.name.last}`;
    userName.className = 'name';

    flexContainer.appendChild(userDiv);
    userDiv.appendChild(userImg);
    userDiv.appendChild(userName);
    userDiv.addEventListener('click', () => {
        console.log(user.name.first + ' ' + user.name.last + ' was clicked')
    })
}

getUsers()
