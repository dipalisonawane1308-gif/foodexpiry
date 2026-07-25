// Get Form
const form = document.getElementById("registerForm");

// Show / Hide Password
const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        eye.innerHTML = "🙈";
    } else {
        password.type = "password";
        eye.innerHTML = "👁";
    }

});

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    

    // Error Fields
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    

    let valid = true;

    // Name
    if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerHTML = "Enter a valid name";
        valid = false;
    }

    // Email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        valid = false;
    }

    // Mobile
    if (!/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit mobile number";
        valid = false;
    }

    // Password
    if (pass.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        valid = false;
    }

    // Confirm Password
    if (pass !== confirm) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match";
        valid = false;
    }

    

    if (valid) {

        const user = {
            name,
            email,
            mobile,
            password: pass,
           
        };

        // Save User
        localStorage.setItem("user", JSON.stringify(user));
        //marked user as logged in
        localStorage.setItem("loggedInUser",JSON.stringify(user));

        alert("🎉 Registration Successful!");

        // Redirect
        window.location.href = "dashboard.html";
    }

});