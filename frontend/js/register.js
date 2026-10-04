const API_URL = "http://localhost:5000/api";

document.addEventListener("DOMContentLoaded", function () {

    const registerForm = document.getElementById("registerForm");
    const registerError = document.getElementById("registerError");
    const registerSuccess = document.getElementById("registerSuccess");
    const registerBtn = document.getElementById("registerBtn");

    registerForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        registerError.textContent = "";
        registerSuccess.textContent = "";

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        registerBtn.disabled = true;
        registerBtn.textContent = "Creating Account...";

        try {

            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            console.log("REGISTER RESPONSE:", data);

            if (response.status === 201 && data.success === true) {

                console.log("Registration successful");
                console.log("Going to login page...");

                // DIRECT LOGIN PAGE
                window.location.href = "login.html";

                return;
            }

            registerError.textContent =
                data.message || "Registration failed.";

            registerBtn.disabled = false;
            registerBtn.textContent = "Create Account";

        } catch (error) {

            console.error("REGISTER ERROR:", error);

            registerError.textContent =
                "Cannot connect to server.";

            registerBtn.disabled = false;
            registerBtn.textContent = "Create Account";
        }
    });
});