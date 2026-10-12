function orderFood(food) {
    alert(food + " ordered successfully!");
}

function registerUser(event) {
    event.preventDefault();

    var name = document.getElementById("regName").value;
    var email = document.getElementById("regEmail").value;
    var password = document.getElementById("regPassword").value;

    localStorage.setItem("foodieName", name);
    localStorage.setItem("foodieEmail", email);
    localStorage.setItem("foodiePassword", password);

    alert("Registration successful!");
    window.location.href = "login.html";
}

function loginUser(event) {
    event.preventDefault();

    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    if (email === localStorage.getItem("foodieEmail") &&
        password === localStorage.getItem("foodiePassword")) {
        alert("Login successful! Welcome " + localStorage.getItem("foodieName"));
        window.location.href = "index.html";
    } else {
        alert("Please register first or check your details.");
    }
}
