(function () {
    function addBackButton() {
        const frontendRoot = new URL("../", document.currentScript.src);
        const routes = new Set([
            "index.html",
            "dashboard.html",
            "companies.html",
            "company.html",
            "topics.html",
            "topic.html",
            "verbal.html",
            "verbal-questions.html",
            "mock-test.html",
            "mock-question.html",
            "daily-challenge.html",
            "formula-book.html",
            "bookmarks.html",
            "wrong-answers.html",
            "history.html",
            "analytics.html",
            "profile.html",
            "result.html",
            "question.html",
            "programming/programming.html"
        ]);
        const fallbackRoutes = {
            "companies.html": "dashboard.html",
            "company.html": "companies.html",
            "topics.html": "dashboard.html",
            "topic.html": "topics.html",
            "verbal.html": "dashboard.html",
            "verbal-questions.html": "verbal.html",
            "mock-test.html": "dashboard.html",
            "mock-question.html": "mock-test.html",
            "daily-challenge.html": "dashboard.html",
            "formula-book.html": "dashboard.html",
            "bookmarks.html": "dashboard.html",
            "wrong-answers.html": "dashboard.html",
            "history.html": "dashboard.html",
            "analytics.html": "dashboard.html",
            "profile.html": "dashboard.html",
            "result.html": "question.html",
            "question.html": "topic.html",
            "programming/programming.html": "dashboard.html"
        };

        function getRoute(url) {
            const path = decodeURIComponent(url.pathname);
            return path.startsWith(frontendRoot.pathname)
                ? path.slice(frontendRoot.pathname.length).toLowerCase()
                : "";
        }

        const currentRoute = getRoute(new URL(window.location.href));
        const fallbackRoute = fallbackRoutes[currentRoute];

        if (!fallbackRoute || document.querySelector(".aptiprep-universal-back")) {
            return;
        }

        const oldBackLink = Array.from(document.querySelectorAll("a")).find(link =>
            /^\s*←?\s*Back\b/i.test(link.textContent.trim())
        );

        if (oldBackLink) {
            const oldParent = oldBackLink.parentElement;
            oldBackLink.remove();

            if (
                oldParent.classList.contains("auth-footer") &&
                oldParent.children.length === 0 &&
                !oldParent.textContent.trim()
            ) {
                oldParent.remove();
            }
        }

        const row = document.createElement("div");
        const button = document.createElement("button");
        row.className = "aptiprep-back-row";
        button.className = "back-button aptiprep-universal-back";
        button.type = "button";
        button.setAttribute("aria-label", "Go back");
        button.textContent = "← Back";
        button.addEventListener("click", function () {
            let previousRoute = "";

            try {
                const referrer = new URL(document.referrer);
                if (referrer.origin === window.location.origin) {
                    previousRoute = getRoute(referrer);
                }
            } catch (error) {
                previousRoute = "";
            }

            const canUseHistory = window.history.length > 1 &&
                routes.has(previousRoute) &&
                previousRoute !== currentRoute &&
                previousRoute !== "login.html" &&
                previousRoute !== "register.html";

            if (canUseHistory) {
                window.history.back();
            } else {
                window.location.assign(new URL(fallbackRoute, frontendRoot).href);
            }
        });
        row.appendChild(button);

        const navbar = document.querySelector(".navbar");
        const content = document.querySelector("main, .daily-container, .mock-wrapper");

        if (navbar) {
            navbar.insertAdjacentElement("afterend", row);
        } else if (content && content.parentNode) {
            content.parentNode.insertBefore(row, content);
        } else {
            document.body.insertBefore(row, document.body.firstChild);
        }
    }

    addBackButton();
    if (window.self !== window.top || window.innerWidth < 1024) return;

    const storageKey = "aptiprep_view_mode";
    const initialMode = localStorage.getItem(storageKey) === "mobile"
        ? "mobile"
        : "laptop";
    const toolbar = document.createElement("div");
    const frame = document.createElement("iframe");
    const buttons = {};
    let previewStarted = false;

    toolbar.className = "aptiprep-view-switcher";
    toolbar.setAttribute("role", "group");
    toolbar.setAttribute("aria-label", "Website preview size");

    frame.className = "aptiprep-view-frame";
    frame.title = "AptiPrep website preview";
    frame.setAttribute("loading", "eager");

    function createButton(mode, icon, label) {
        const button = document.createElement("button");
        const iconElement = document.createElement("span");

        button.type = "button";
        button.dataset.viewMode = mode;
        button.setAttribute("aria-label", label + " View");
        button.title = label + " View";

        iconElement.className = "view-icon";
        iconElement.setAttribute("aria-hidden", "true");
        iconElement.textContent = icon;

        button.appendChild(iconElement);
        button.addEventListener("click", function () {
            applyMode(mode, true);
        });

        buttons[mode] = button;
        toolbar.appendChild(button);
    }

    function startPreview() {
        if (previewStarted) return;

        previewStarted = true;
        frame.src = window.location.href;
        document.body.appendChild(frame);
        frame.addEventListener("load", syncAddressBar);
    }

    function syncAddressBar() {
        try {
            const previewURL = new URL(frame.contentWindow.location.href);
            if (previewURL.origin !== window.location.origin) return;

            const currentURL = window.location.pathname + window.location.search + window.location.hash;
            const nextURL = previewURL.pathname + previewURL.search + previewURL.hash;

            if (currentURL !== nextURL) {
                window.history.replaceState(window.history.state, "", nextURL);
            }

            removeOriginalPageContent();
        } catch (error) {
            // Keep the host page intact if a preview route cannot be accessed.
        }
    }

    function removeOriginalPageContent() {
        Array.from(document.body.children).forEach(function (element) {
            if (element !== toolbar && element !== frame) {
                element.remove();
            }
        });
    }

    function applyMode(mode, save) {
        document.body.dataset.aptiprepViewMode = mode;

        const usePreviewFrame = mode === "mobile"
            || previewStarted
            || (mode === "laptop" && window.innerWidth < 1024);
        document.body.classList.toggle(
            "aptiprep-preview-active",
            usePreviewFrame
        );

        if (save) {
            localStorage.setItem(storageKey, mode);
        }

        Object.keys(buttons).forEach(function (buttonMode) {
            buttons[buttonMode].setAttribute(
                "aria-pressed",
                String(buttonMode === mode)
            );
        });

        if (usePreviewFrame) {
            startPreview();
        }
    }

    createButton("laptop", "💻", "Laptop");
    createButton("mobile", "📱", "Mobile");
    document.body.insertBefore(toolbar, document.body.firstChild);

    if (initialMode === "mobile") {
        applyMode("mobile", false);
    } else if (window.innerWidth < 1024) {
        applyMode("laptop", false);
    } else {
        toolbar.querySelector('[data-view-mode="laptop"]').setAttribute("aria-pressed", "true");
        toolbar.querySelector('[data-view-mode="mobile"]').setAttribute("aria-pressed", "false");
        document.body.dataset.aptiprepViewMode = "laptop";
    }
})();
