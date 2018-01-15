var tweets = [
     {username: 'Bobo', text: 'hello followers!'},
     {username: 'Elvis', text: 'this exercise is really easy!'},
     {username: 'Mimi', text: 'hello!'}
]; 

function loadTweets() {
    tweets.forEach(tweet => { 
        appendTweet(getUserImage(tweet.username), tweet.username, tweet.text);
    });
}

function submitTweet() {
    var message = $("#tweetBody").get(0).value.replace(/\r?\n/g, '<br />');
    tweets.push({username: placeholderCurrentUsername, text: message});
    appendTweet(getUserImage(placeholderCurrentUsername), placeholderCurrentUsername, message);
    $("#tweetBody").get(0).value = "";
}

function appendTweet(imagePath, username, message) {
    var tweetDiv = document.createElement("div");
    tweetDiv.innerHTML = `
        <li class="media my-3">
            <img src="${imagePath}" class="img-thumbnail mr-3">
            <div class="media-body">
                <strong>${username}</strong>
                <p>${message}</p>
            </div>
        </li>
        `;
    $("#tweets").appendChild(tweetDiv);
}

loadTweets();