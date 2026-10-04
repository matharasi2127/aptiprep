const API_URL = "http://localhost:5000/api";


/* =====================================================
   REGISTER
===================================================== */

async function registerUser(name, email, password) {

    const response = await fetch("http://localhost:5000/api/auth/register", {

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

    const responseText = await response.text();
    let data;

    try {
        data = responseText ? JSON.parse(responseText) : {};
    } catch (parseError) {
        console.error("Registration returned a non-JSON response:", responseText);
        throw new Error(`Registration failed with status ${response.status}`);
    }

    if (!response.ok) {
        throw new Error(data.message || "Registration failed");
    }

    return data;
}


/* =====================================================
   LOGIN
===================================================== */

async function loginUser(email, password) {

    const response = await fetch(`${API_URL}/auth/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email: email,
            password: password
        })

    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login failed");
    }


    /* Save login information */

    localStorage.setItem(
        "aptiprep_token",
        data.token
    );

    localStorage.setItem(
        "aptiprep_user",
        JSON.stringify(data.user)
    );


    return data;
}


/* =====================================================
   LOGOUT
===================================================== */

function logoutUser() {

    localStorage.removeItem("aptiprep_token");

    localStorage.removeItem("aptiprep_user");

    window.location.href = "login.html";
}


/* =====================================================
   GET TOKEN
===================================================== */

function getToken() {

    return localStorage.getItem("aptiprep_token");
}


/* =====================================================
   GET CURRENT USER
===================================================== */

function getCurrentUser() {

    const user = localStorage.getItem("aptiprep_user");

    if (!user) {
        return null;
    }

    try {

        return JSON.parse(user);

    } catch (error) {

        return null;
    }
}


/* =====================================================
   CHECK LOGIN
===================================================== */

function isLoggedIn() {

    return !!getToken();
}


/* =====================================================
   PROTECT PAGE
===================================================== */

function requireLogin() {

    if (!isLoggedIn()) {

        window.location.href = "login.html";

    }

}


/* =====================================================
   AUTH HEADERS
===================================================== */

function getAuthHeaders() {

    return {

        "Content-Type": "application/json",

        "Authorization": `Bearer ${getToken()}`

    };

}


/* =====================================================
   REGISTER FORM
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener("submit", async (event) => {

            event.preventDefault();


            const name =
                document.getElementById("registerName").value.trim();

            const email =
                document.getElementById("registerEmail").value.trim();

            const password =
                document.getElementById("registerPassword").value;

            const confirmPassword =
                document.getElementById("confirmPassword").value;

            const message =
                document.getElementById("registerMessage");

            const button =
                document.getElementById("registerButton");


            /* Validate password */

            if (password.length < 8) {

                message.textContent =
                    "Password must contain at least 8 characters.";

                return;
            }


            /* Check passwords */

            if (password !== confirmPassword) {

                message.textContent =
                    "Passwords do not match.";

                return;
            }


            /* Loading */

            button.disabled = true;

            button.textContent = "Creating Account...";


            try {

                const result = await registerUser(
                    name,
                    email,
                    password
                );


                message.textContent =
                    result.message;


                /* Go to login after successful registration */

                setTimeout(() => {

                    window.location.href = "login.html";

                }, 1000);


            } catch (error) {

                console.error("Registration request failed:", error);

                message.textContent =
                    error.message;

                button.disabled = false;

                button.textContent =
                    "Create Account →";

            }

        });

    }


    /* =================================================
       LOGIN FORM
    ================================================= */

    const loginForm =
        document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", async (event) => {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value;

            const message =
                document.getElementById("loginMessage");

            const button =
                document.getElementById("loginButton");


            /* Loading */

            button.disabled = true;

            button.textContent = "Logging in...";


            try {

                const result = await loginUser(
                    email,
                    password
                );


                message.textContent =
                    result.message;


                /* Go to dashboard */

                setTimeout(() => {

                    window.location.href =
                        "dashboard.html";

                }, 700);


            } catch (error) {

                message.textContent =
                    error.message;

                button.disabled = false;

                button.textContent =
                    "Login →";

            }

        });

    }

});