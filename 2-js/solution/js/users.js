var followees = [
    'Bobo', 'Elvis', 'Finn'
];

function loadUsers() {
    usersContainer = document.getElementById("userscontainer");
    loadUserdiv(usersContainer, false);
}

function loadUserdiv(usersContainer, isFolloweesOnly) {
    if(isFolloweesOnly){
        var usersArray = users.filter(user => followees.includes(user.username)); 
    }
    else {
        var usersArray = users;
    }
    usersArray
        .forEach(user => appendUserByName(usersContainer, user.username));
}

function appendUserByName(usersContainer, username) {
    users
        .filter(user => user.username === username)
        .forEach(user => appendUser(usersContainer, user.image, user.username));
}

function appendUser(usersContainer, imagePath, username) {
    usersContainer.innerHTML += `
        <div followinguser="${username}" ${usersContainer.id.includes("userscontainer")?"class=\"col-3\"":""}>
            <img src="${imagePath}">
            <div class="mt-2 mb-1">
                <button class="btn" onclick="toggleFollow('${username}')" userbutton="${username}"></button>
                <p>${username}</p>
            </div>
        </div>
    `;
    updateUserFollowingStatus(username);
}

function filterUsers(filterDiv) {
    usernameFilter = filterDiv.value;
    usersContainer = document.getElementById("userscontainer");
    users.forEach(user => {
        userDiv = usersContainer.querySelector("[followinguser=\""+user.username+"\"]");
        if(user.username.toLowerCase().includes(usernameFilter) && userDiv === null) {
            appendUserByName(usersContainer, user.username);
        }
        else if(!user.username.toLowerCase().includes(usernameFilter) && userDiv !== null) {
            userDiv.remove();
        }
    });
}

function toggleFollow(username) {
    if(followees.includes(username)) {
        followees.splice(followees.indexOf(username), 1);
    } else {
        followees.push(username);
    }
    updateUserFollowingStatus(username);
}

function updateUserFollowingStatus(username) {
    updateFollowingButton(username);
    updateFollowingDivs(username);
}

function updateFollowingButton(username) {
    var userButtons = document.querySelectorAll("[userbutton=\"" + username + "\"]");
    userButtons.forEach(button =>{
            if(followees.includes(username)) {
                button.className = "btn btn-danger";
                button.innerHTML = "unfollow";
            }
            else {
                button.className = "btn btn-default";
                button.innerHTML = "follow";
            }
        });
}

function updateFollowingDivs(username) {
    followeesContainer = document.getElementById("followeescontainer");
    if(followees.includes(username)){
        followeeDiv = followeesContainer.querySelector("[followinguser=\"" + username + "\"]");
        if(followeeDiv === null) {
            appendUser(followeesContainer, getUserImage(username), username);
        }
    }
    else {
        followeeDiv = followeesContainer.querySelector("[followinguser=\"" + username + "\"]");
        if(followeeDiv !== null) {
            followeeDiv.remove();
        }
    }
}

loadUsers();