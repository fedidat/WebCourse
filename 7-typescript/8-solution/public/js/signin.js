$(function () {
    $('form').submit(function(){
        $.post("login", {username: $("#username").val(), password: $("#password").val()}, function(data, status){
            let redirectURL = (new URL(location)).searchParams.get('redirect');
            window.location = redirectURL ? redirectURL : "/index.html";
            return false;
        })
        .fail(function(response) {
            $("#username").addClass("is-invalid");
            $("#password").addClass("is-invalid");
            $("#username-feedback").html(response.responseText);
        });
        return false;
    });
});