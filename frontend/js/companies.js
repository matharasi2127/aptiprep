document.addEventListener("DOMContentLoaded", () => {

    const companyContainer =
        document.getElementById("companyContainer");

    const searchInput =
        document.getElementById("companySearch");

    // IMPORTANT
    const API_URL = "https://aptiprep-1zyu.onrender.com/api/companies";

    let allCompanies = [];


    // ==========================================
    // LOAD COMPANIES
    // ==========================================

    async function loadCompanies() {

        companyContainer.innerHTML = `
            <div class="loading">
                Loading companies...
            </div>
        `;

        try {

            console.log("Calling API:", API_URL);

            const response = await fetch(API_URL);

            console.log(
                "Response status:",
                response.status
            );

            if (!response.ok) {
                throw new Error(
                    "API Error: " + response.status
                );
            }

            const data = await response.json();

            console.log("API Response:", data);


            if (!data.success) {

                throw new Error(
                    data.message ||
                    "Company API failed"
                );

            }


            // Get companies
            allCompanies =
                Array.isArray(data.companies)
                    ? data.companies
                    : [];


            console.log(
                "Companies loaded:",
                allCompanies.length
            );


            if (allCompanies.length === 0) {

                companyContainer.innerHTML = `
                    <div class="no-company">

                        <h3>No companies found</h3>

                        <p>
                            Database-la companies
                            available illa.
                        </p>

                    </div>
                `;

                return;
            }


            displayCompanies(allCompanies);


        } catch (error) {

            console.error(
                "COMPANY API ERROR:",
                error
            );

            companyContainer.innerHTML = `
                <div class="no-company">

                    <h3>
                        Unable to load companies
                    </h3>

                    <p>
                        Backend connection failed.
                    </p>

                    <p>
                        Please check
                        <b>https://aptiprep-1zyu.onrender.com/api</b>
                    </p>

                </div>
            `;

        }

    }


    // ==========================================
    // DISPLAY COMPANIES
    // ==========================================

    function displayCompanies(companies) {

        companyContainer.innerHTML = "";


        if (!companies.length) {

            companyContainer.innerHTML = `
                <div class="no-company">

                    <h3>No company found</h3>

                    <p>
                        Try another search.
                    </p>

                </div>
            `;

            return;
        }


        companies.forEach(company => {

            const card =
                document.createElement("div");

            card.className =
                "company-card";


            const logo =
                company.logo ||
                "assets/company-logos/default.png";


            card.innerHTML = `

                <img
                    src="${logo}"
                    alt="${company.name}"
                    class="company-logo"
                    onerror="
                        this.onerror=null;
                        this.src='assets/company-logos/default.png';
                    "
                >

                <h3>
                    ${company.name}
                </h3>

                <p>
                    ${
                        company.description ||
                        "Placement aptitude preparation"
                    }
                </p>

                <a
                    href="company.html?company=${encodeURIComponent(company.name)}"
                    class="practice-btn"
                >
                    Start Practice
                </a>

            `;


            companyContainer.appendChild(card);

        });

    }


    // ==========================================
    // SEARCH
    // ==========================================

    searchInput.addEventListener(
        "input",
        function () {

            const searchText =
                this.value
                    .trim()
                    .toLowerCase();


            // Empty search
            if (searchText === "") {

                displayCompanies(
                    allCompanies
                );

                return;
            }


            const filteredCompanies =
                allCompanies.filter(company => {

                    const name =
                        String(
                            company.name || ""
                        ).toLowerCase();

                    return name.includes(
                        searchText
                    );

                });


            displayCompanies(
                filteredCompanies
            );

        }
    );


    // ==========================================
    // START
    // ==========================================

    loadCompanies();

});