$(function () {
    $('form').submit(function(){
        if($("#password").val() !== $("#confirmpassword").val()){
            $("#passwordconfirm-feedback").addClass("is-invalid");
            $("#passwordconfirm-feedback").html("passwords do not match");
        }
        $.post("createUser", {username: $("#username").val(), password: $("#password").val()}, function(data, status){
            let redirectURL = (new URL(location)).searchParams.get('redirect');
            window.location = redirectURL ? redirectURL : "/signin.html";
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