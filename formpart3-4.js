console.log("Scripts file linked!");

const loginSubmit = document.getElementById("loginSubmit");

const loginDiv = document.getElementById("login");

loginSubmit.addEventListener("click", (e) => {

const loginPassword = document.getElementById('password').value;

    e.preventDefault();

    if (loginPassword === "12345678") {

        loginDiv.innerHTML = "<h1>Login Successful!</h1>"

    } else {

        alert("Incorrect password. Please try again.");

    }

});

