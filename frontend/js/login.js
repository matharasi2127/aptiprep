const API_URL = "https://aptiprep-1zyu.onrender.com/api";


console.log("AptiPrep login.js loaded");


document.addEventListener(
    "DOMContentLoaded",
    function () {


        const form =
            document.getElementById(
                "loginForm"
            );


        const button =
            document.getElementById(
                "loginBtn"
            );


        const errorMessage =
            document.getElementById(
                "loginError"
            );


        if (!form) {

            console.error(
                "loginForm not found"
            );

            return;
        }


        form.addEventListener(
            "submit",
            async function (event) {


                event.preventDefault();


                errorMessage.textContent = "";


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const password =
                    document
                        .getElementById("password")
                        .value;


                if (!email || !password) {

                    errorMessage.textContent =
                        "Please enter email and password.";

                    return;
                }


                button.disabled = true;

                button.textContent =
                    "Logging in...";


                try {


                    const response =
                        await fetch(
                            `${API_URL}/auth/login`,
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body:
                                    JSON.stringify({
                                        email:
                                            email,

                                        password:
                                            password
                                    })
                            }
                        );


                    const data =
                        await response.json();


                    console.log(
                        "Login response:",
                        data
                    );


                    if (!response.ok) {

                        errorMessage.textContent =
                            data.message ||
                            "Login failed.";

                        button.disabled = false;

                        button.textContent =
                            "Login";

                        return;
                    }


                    // -------------------------
                    // LOGIN SUCCESS
                    // -------------------------

                    // Token only
                    // User data is still stored
                    // in backend SQLite.

                    localStorage.setItem(
                        "aptiprep_token",
                        data.token
                    );


                    localStorage.setItem(
                        "aptiprep_user",
                        JSON.stringify(
                            data.user
                        )
                    );


                    alert(
                        "Login successful!"
                    );


                    // Change this if your
                    // dashboard filename differs

                    window.location.href =
                        "dashboard.html";


                } catch (error) {


                    console.error(
                        "Login fetch error:",
                        error
                    );


                    errorMessage.textContent =
                        "Cannot connect to AptiPrep server.";


                    button.disabled = false;

                    button.textContent =
                        "Login";

                }

            }
        );

    }
);