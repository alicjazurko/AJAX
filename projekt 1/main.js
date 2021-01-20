const getUsers = (e) => {
    e.preventDefault();

    const usersNumber = document.querySelector('[name="users-number"]').value;
    const usersGender = document.querySelector('[name="gender"]').value;
    const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${usersGender === "both" ? "male,female" : usersGender}`;
    
    fetch(url)
    .then(response =>  {
        // console.log(response);
        if(response.status !== 200) {
            throw Error("TO nie jest OK")
        } else {
            return response.json()
        }
    })
    .then(json => showUsers(json.results))
    .catch(err => console.log(err))
}

const showUsers = (users) => {
    const resultArea = document.querySelector('.users-list');
    users.forEach(user => {
        const item = document.createElement('div');
        item.className = 'user';
        item.innerHTML = `
        <img class="user__image" src="${user.picture.medium}">
        <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</div>
        `
        resultArea.appendChild(item)
    });
}
document.querySelector('.generator').addEventListener('submit', getUsers)