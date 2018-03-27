var users = [
    { image: 'image/1.jpg', username: 'Alice' },
    { image: 'image/2.jpg', username: 'Bobo' },
    { image: 'image/3.jpg', username: 'Charlie' },
    { image: 'image/4.jpg', username: 'Dan' },
    { image: 'image/5.jpg', username: 'Elvis' },
    { image: 'image/1.jpg', username: 'Finn' },
    { image: 'image/2.jpg', username: 'Gunther' },
    { image: 'image/3.jpg', username: 'Hector' },
    { image: 'image/4.jpg', username: 'Mimi' }
];

var currentUsername = $.cookie("user") ? $.cookie("user") : "Anonymous";
users.push({ image: 'image/4.jpg', username: currentUsername });

function getUserImage(username) {
    return users.find((user) => user.username === username).image;
}