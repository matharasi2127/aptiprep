/* =====================================================
   APTIPREP GLOBAL THEME
   Light Mode + Dark Mode
   ===================================================== */

(function () {

    const themeScriptURL = document.currentScript && document.currentScript.src;

    if (themeScriptURL) {
        const viewStylesheet = document.createElement("link");
        viewStylesheet.rel = "stylesheet";
        viewStylesheet.href = new URL(
            "../css/view-switcher.css",
            themeScriptURL
        ).href + "?v=3";

        viewStylesheet.addEventListener("load", loadViewSwitcher, { once: true });
        viewStylesheet.addEventListener("error", loadViewSwitcher, { once: true });
        document.head.appendChild(viewStylesheet);
    }

    function loadViewSwitcher() {
        const script = document.createElement("script");
        script.src = new URL(
            "view-switcher.js",
            themeScriptURL
        ).href + "?v=4";
        document.body.appendChild(script);
    }

    const savedTheme =
        localStorage.getItem("aptiprep_theme");

    /* Apply saved theme BEFORE page is shown */
    if (savedTheme === "dark") {
        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );
    } else {
        document.documentElement.setAttribute(
            "data-theme",
            "light"
        );
    }

    function createThemeButton() {

        if (document.getElementById("themeToggle")) {
            return;
        }

        const button = document.createElement("button");

        button.id = "themeToggle";
        button.className = "global-theme-toggle";
        button.type = "button";
        button.setAttribute(
            "aria-label",
            "Toggle dark mode"
        );

        document.body.appendChild(button);

        updateIcon();

        button.addEventListener(
            "click",
            function () {

                const currentTheme =
                    document.documentElement.getAttribute(
                        "data-theme"
                    );

                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";

                document.documentElement.setAttribute(
                    "data-theme",
                    newTheme
                );

                localStorage.setItem(
                    "aptiprep_theme",
                    newTheme
                );

                updateIcon();
            }
        );
    }

    function updateIcon() {

        const button =
            document.getElementById(
                "themeToggle"
            );

        if (!button) {
            return;
        }

        const isDark =
            document.documentElement.getAttribute(
                "data-theme"
            ) === "dark";

        button.textContent =
            isDark ? "☀️" : "🌙";
    }


    /* Create button after page loads */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            createThemeButton
        );

    } else {

        createThemeButton();

    }

})();