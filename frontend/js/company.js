const API_URL = "http://localhost:5000/api";


// =====================================
// GET COMPANY NAME FROM URL
// =====================================

const params =
    new URLSearchParams(window.location.search);

const selectedCompany =
    params.get("company");

console.log(
    "Selected Company:",
    selectedCompany
);


// =====================================
// ELEMENTS
// =====================================

const companyName =
    document.getElementById("companyName");

const companyDescription =
    document.getElementById("companyDescription");

const companyLogo =
    document.getElementById("companyLogo");

const topicCount =
    document.getElementById("topicCount");

const questionCount =
    document.getElementById("questionCount");

const topicsContainer =
    document.getElementById("topicsContainer");


// =====================================
// LOAD COMPANY
// =====================================

async function loadCompany() {

    if (!selectedCompany) {

        showError(
            "Company was not selected."
        );

        return;
    }


    try {

        const response =
            await fetch(`${API_URL}/companies`);


        if (!response.ok) {

            throw new Error(
                "Companies API failed"
            );
        }


        const data =
            await response.json();


        const companies =
            Array.isArray(data)
                ? data
                : data.companies || [];


        console.log(
            "All companies:",
            companies
        );


        // Find exact company

        const company =
            companies.find(
                item =>
                    item.name.toLowerCase() ===
                    selectedCompany.toLowerCase()
            );


        if (!company) {

            showError(
                "Company not found."
            );

            return;
        }


        console.log(
            "Loaded company:",
            company
        );


        // =================================
        // COMPANY DETAILS
        // =================================

        companyName.textContent =
            company.name;


        companyDescription.textContent =
            company.description ||
            `Prepare for ${company.name} placement aptitude tests.`;


        // =================================
        // COMPANY LOGO
        // =================================

        let logo =
            company.logo;


        if (!logo) {

            logo =
                "assets/company-logos/default.png";

        }

        else if (
            !logo.startsWith("http") &&
            !logo.startsWith("assets/")
        ) {

            logo =
                `assets/company-logos/${logo}`;

        }


        companyLogo.src =
            logo;


        companyLogo.alt =
            `${company.name} logo`;


        // =================================
        // LOAD TOPICS
        // =================================

        await loadTopics(company.id);

    }

    catch (error) {

        console.error(
            "Company loading error:",
            error
        );

        showError(
            "Unable to load company details."
        );
    }
}


// =====================================
// LOAD TOPICS
// =====================================

async function loadTopics(companyId) {

    try {

        const response =
            await fetch(
                `${API_URL}/topics/company/${companyId}`
            );


        if (!response.ok) {

            throw new Error(
                "Topics API failed"
            );
        }


        const data =
            await response.json();


        const allTopics =
            Array.isArray(data)
                ? data
                : data.topics || [];

        const seenTopicNames = new Set();
        const topics = allTopics.filter(topic => {
            const normalizedName = String(topic.name || "")
                .trim()
                .toLowerCase()
                .replace(/\bpermutations\b/g, "permutation")
                .replace(/\bcombinations\b/g, "combination");

            if (seenTopicNames.has(normalizedName)) {
                return false;
            }

            seenTopicNames.add(normalizedName);
            return true;
        });


        console.log(
            "Topics:",
            topics
        );


        topicCount.textContent =
            topics.length;


        questionCount.textContent =
            `${topics.length * 10}+`;


        topicsContainer.innerHTML = "";


        if (topics.length === 0) {

            topicsContainer.innerHTML = `

                <div class="empty-state">

                    <h3>
                        No Topics Available
                    </h3>

                    <p>
                        Questions will be added soon.
                    </p>

                </div>

            `;

            return;
        }


        topics.forEach(
            (topic, index) => {

                const card =
                    document.createElement("a");


                card.className =
                    "topic-card";


                card.addEventListener("click", function () {
                    startTopic(topic.id, companyId);
                });


                card.innerHTML = `

                    <div class="topic-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <div class="topic-content">

                        <h3>
                            ${topic.name}
                        </h3>

                        <p>
                            Practice ${topic.name} questions
                        </p>

                    </div>

                    <div class="topic-arrow">
                        →
                    </div>

                `;


                topicsContainer.appendChild(card);

            }
        );

    }

    catch (error) {

        console.error(
            "Topic loading error:",
            error
        );


        topicsContainer.innerHTML = `

            <div class="error-message">

                Unable to load topics.

            </div>

        `;
    }
}

function startTopic(topicId, companyId) {

    let url = `question.html?topic_id=${topicId}`;

    if (companyId) {
        url += `&company_id=${companyId}`;
    }

    window.location.href = url;
}


// =====================================
// ERROR
// =====================================

function showError(message) {

    companyName.textContent =
        "Unable to Load";


    companyDescription.textContent =
        message;


    topicCount.textContent =
        "0";


    questionCount.textContent =
        "0";


    topicsContainer.innerHTML =
        "";
}


// =====================================
// START
// =====================================

document.addEventListener(
    "DOMContentLoaded",
    loadCompany
);