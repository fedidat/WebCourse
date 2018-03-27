var followees = [
    'Bobo', 'Elvis', 'Finn'
];

function loadUsers() {
    users.forEach(user => appendUser(user.image, user.username));
}

function appendUser(imagePath, username) {
    var divToAdd = `
        <div followinguser="${username}" class="user"">
            <img src="${imagePath}">
            <div class="mt-2 mb-1">
                <button class="btn userbutton" onclick="toggleFollow('${username}')" userbutton="${username}"></button>
                <p>${username}</p>
            </div>
        </div>
    `;
    $("#userscontainer").get(0).innerHTML += divToAdd;
    $("#userscontainer .user").addClass("col-3");
    $("#followeescontainer").get(0).innerHTML += divToAdd;
    updateUserFollowingStatus(username);
}

function filterUsers(filterDiv) {
    usernameFilter = filterDiv.value;
    $("#userscontainer .user").each(userDiv => {
        if(userDiv.getAttribute("followinguser").includes(usernameFilter)) {
            userDiv.classList.remove("hidden");
        } else {
            userDiv.classList.add("hidden");
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
    var userButtons = $(".userbutton").filter(element => element.getAttribute("userbutton") === username).each(button =>{
            if(followees.includes(username)) {
                button.classList.add("btn-danger");
                button.innerHTML = "unfollow";
            }
            else {
                button.classList.remove("btn-danger");
                button.innerHTML = "follow";
            }
        });
}

function updateFollowingDivs(username) {
    if(followees.includes(username)) {
        $("#followeescontainer .user").filter(element => element.getAttribute("followinguser") === username).removeClass("hidden");
    }
    else {
        $("#followeescontainer .user").filter(element => element.getAttribute("followinguser") === username).addClass("hidden");
    }
}

loadUsers();