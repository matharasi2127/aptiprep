const sqlite3 = require("sqlite3").verbose();


// ======================================================
// DATABASE CONNECTION
// ======================================================

const db = new sqlite3.Database("./aptiprep.db", (err) => {

    if (err) {
        console.error(
            "Database connection failed:",
            err.message
        );
    } else {
        console.log(
            "AptiPrep database connected successfully!"
        );
    }

});


// ======================================================
// USERS TABLE
// ======================================================

db.run(`
    CREATE TABLE IF NOT EXISTS users (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL,

        email TEXT UNIQUE NOT NULL,

        password TEXT NOT NULL,

        created_at DATETIME DEFAULT CURRENT_TIMESTAMP

    )
`, (err) => {

    if (err) {
        console.error(
            "Users table error:",
            err.message
        );
    } else {
        console.log("Users table ready!");
    }

});


// ======================================================
// COMPANIES TABLE
// ======================================================

db.run(`
    CREATE TABLE IF NOT EXISTS companies (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL UNIQUE,

        logo TEXT,

        description TEXT,

        website TEXT

    )
`, (err) => {

    if (err) {
        console.error(
            "Companies table error:",
            err.message
        );
    } else {
        console.log("Companies table ready!");
    }

});


// ======================================================
// TOPICS TABLE
// ======================================================

db.run(`
    CREATE TABLE IF NOT EXISTS topics (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        name TEXT NOT NULL UNIQUE,

        description TEXT

    )
`, (err) => {

    if (err) {
        console.error(
            "Topics table error:",
            err.message
        );
    } else {
        console.log("Topics table ready!");
    }

});


// ======================================================
// COMPANY TOPICS TABLE
// ======================================================

db.run(`
    CREATE TABLE IF NOT EXISTS company_topics (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        company_id INTEGER NOT NULL,

        topic_id INTEGER NOT NULL,

        FOREIGN KEY (company_id)
            REFERENCES companies(id),

        FOREIGN KEY (topic_id)
            REFERENCES topics(id),

        UNIQUE(company_id, topic_id)

    )
`, (err) => {

    if (err) {
        console.error(
            "Company topics table error:",
            err.message
        );
    } else {
        console.log(
            "Company topics table ready!"
        );
    }

});


// ======================================================
// QUESTIONS TABLE
// ======================================================
//
// IMPORTANT:
// company_id is included so questions can be
// separated company-wise.
//
// Example:
//
// TCS + Number System
// Infosys + Number System
//
// Both can have different questions.
// ======================================================

db.run(`
    CREATE TABLE IF NOT EXISTS questions (

        id INTEGER PRIMARY KEY AUTOINCREMENT,

        company_id INTEGER,

        topic_id INTEGER NOT NULL,

        question TEXT NOT NULL,

        option_a TEXT NOT NULL,

        option_b TEXT NOT NULL,

        option_c TEXT NOT NULL,

        option_d TEXT NOT NULL,

        correct_answer TEXT NOT NULL,

        explanation TEXT NOT NULL,

        source TEXT,

        FOREIGN KEY (company_id)
            REFERENCES companies(id),

        FOREIGN KEY (topic_id)
            REFERENCES topics(id)

    )
`, (err) => {

    if (err) {

        console.error(
            "Questions table error:",
            err.message
        );

    } else {

        console.log(
            "Questions table ready!"
        );

    }

});


// ======================================================
// MIGRATION
// ======================================================
//
// Existing database already has questions table
// without company_id/source.
//
// So we add missing columns safely.
// ======================================================


// Add company_id
db.run(`
    ALTER TABLE questions
    ADD COLUMN company_id INTEGER
`, (err) => {

    if (err) {

        if (
            err.message.includes(
                "duplicate column name"
            )
        ) {

            console.log(
                "questions.company_id already exists."
            );

        } else {

            console.error(
                "company_id migration error:",
                err.message
            );

        }

    } else {

        console.log(
            "company_id column added to questions."
        );

    }

});


// Add source
db.run(`
    ALTER TABLE questions
    ADD COLUMN source TEXT
`, (err) => {

    if (err) {

        if (
            err.message.includes(
                "duplicate column name"
            )
        ) {

            console.log(
                "questions.source already exists."
            );

        } else {

            console.error(
                "source migration error:",
                err.message
            );

        }

    } else {

        console.log(
            "source column added to questions."
        );

    }

});


// ======================================================
// COMPANIES DATA
// ======================================================

const companies = [

    [
        "TCS",
        "assets/company-logos/tcs.png",
        "Tata Consultancy Services aptitude preparation",
        "https://www.tcs.com"
    ],

    [
        "Infosys",
        "assets/company-logos/infosys.png",
        "Infosys aptitude preparation",
        "https://www.infosys.com"
    ],

    [
        "Wipro",
        "assets/company-logos/wipro.png",
        "Wipro aptitude preparation",
        "https://www.wipro.com"
    ],

    [
        "Accenture",
        "assets/company-logos/accenture.png",
        "Accenture aptitude preparation",
        "https://www.accenture.com"
    ],

    [
        "Cognizant",
        "assets/company-logos/cognizant.png",
        "Cognizant aptitude preparation",
        "https://www.cognizant.com"
    ],

    [
        "Capgemini",
        "assets/company-logos/capgemini.png",
        "Capgemini aptitude preparation",
        "https://www.capgemini.com"
    ],

    [
        "HCLTech",
        "assets/company-logos/hcltech.png",
        "HCLTech aptitude preparation",
        "https://www.hcltech.com"
    ],

    [
        "Tech Mahindra",
        "assets/company-logos/tech-mahindra.png",
        "Tech Mahindra aptitude preparation",
        "https://www.techmahindra.com"
    ],

    [
        "Zoho",
        "assets/company-logos/zoho.png",
        "Zoho aptitude preparation",
        "https://www.zoho.com"
    ],

    [
        "IBM",
        "assets/company-logos/ibm.png",
        "IBM aptitude preparation",
        "https://www.ibm.com"
    ],

    [
        "Deloitte",
        "assets/company-logos/deloitte.png",
        "Deloitte aptitude preparation",
        "https://www.deloitte.com"
    ]

];


// ======================================================
// INSERT COMPANIES
// ======================================================

const companySQL = `

    INSERT OR IGNORE INTO companies
    (
        name,
        logo,
        description,
        website
    )

    VALUES (?, ?, ?, ?)

`;


companies.forEach((company) => {

    db.run(
        companySQL,
        company,
        (err) => {

            if (err) {

                console.error(
                    "Company insert error:",
                    err.message
                );

            }

        }
    );

});


// ======================================================
// TOPICS DATA
// ======================================================

const topics = [

    [
        "Number System",
        "Numbers, divisibility, remainders, HCF and LCM"
    ],

    [
        "Percentages",
        "Percentage calculations and applications"
    ],

    [
        "Time & Work",
        "Work efficiency, pipes and work-rate problems"
    ],

    [
        "Ratio & Proportion",
        "Ratios, proportions and related problems"
    ],

    [
        "Data Interpretation",
        "Tables, charts and numerical data analysis"
    ],

    [
        "Time, Speed & Distance",
        "Speed, distance, trains and relative motion"
    ],

    [
        "Profit & Loss",
        "Profit, loss, cost price and selling price"
    ],

    [
        "Probability",
        "Basic and applied probability problems"
    ],

    [
        "Permutation & Combination",
        "Arrangement and selection problems"
    ],

    [
        "Averages",
        "Average and weighted average problems"
    ]

];


// ======================================================
// INSERT TOPICS
// ======================================================

const topicSQL = `

    INSERT OR IGNORE INTO topics
    (
        name,
        description
    )

    VALUES (?, ?)

`;


db.run(
    `
        UPDATE topics
        SET name = ?
        WHERE name = ?
          AND NOT EXISTS (
              SELECT 1
              FROM topics
              WHERE name = ?
          )
    `,
    [
        "Permutation & Combination",
        "Permutation & Combination",
        "Permutation & Combination"
    ],
    (err) => {

        if (err) {

            console.error(
                "Topic name migration error:",
                err.message
            );

        }

    }
);


topics.forEach((topic) => {

    db.run(
        topicSQL,
        topic,
        (err) => {

            if (err) {

                console.error(
                    "Topic insert error:",
                    err.message
                );

            }

        }
    );

});


// ======================================================
// CONNECT EVERY COMPANY WITH EVERY TOPIC
// ======================================================
//
// 11 companies × 10 topics
//
// = 110 company-topic combinations
// ======================================================

setTimeout(() => {

    db.all(
        `
            SELECT id, name
            FROM companies
            ORDER BY id
        `,
        [],
        (companyErr, companyRows) => {

            if (companyErr) {

                console.error(
                    "Company fetch error:",
                    companyErr.message
                );

                return;
            }


            db.all(
                `
                    SELECT id, name
                    FROM topics
                    ORDER BY id
                `,
                [],
                (topicErr, topicRows) => {

                    if (topicErr) {

                        console.error(
                            "Topic fetch error:",
                            topicErr.message
                        );

                        return;
                    }


                    const mappingSQL = `

                        INSERT OR IGNORE INTO company_topics

                        (
                            company_id,
                            topic_id
                        )

                        VALUES (?, ?)

                    `;


                    companyRows.forEach(
                        (company) => {

                            topicRows.forEach(
                                (topic) => {

                                    db.run(
                                        mappingSQL,
                                        [
                                            company.id,
                                            topic.id
                                        ],
                                        (err) => {

                                            if (err) {

                                                console.error(
                                                    "Company-topic mapping error:",
                                                    err.message
                                                );

                                            }

                                        }
                                    );

                                }
                            );

                        }
                    );


                    console.log(
                        `${companyRows.length} companies connected with ${topicRows.length} topics.`
                    );

                    console.log(
                        "Company-topic mapping completed successfully!"
                    );

                }
            );

        }
    );

}, 1000);


// ======================================================
// DATABASE READY MESSAGE
// ======================================================

console.log(
    "Database tables are being prepared..."
);


// ======================================================
// EXPORT DATABASE
// ======================================================
// ==========================================
// USER PROGRESS TABLE
// ==========================================

db.run(`
    CREATE TABLE IF NOT EXISTS user_progress (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        questions_solved INTEGER DEFAULT 0,
        correct_answers INTEGER DEFAULT 0,
        tests_completed INTEGER DEFAULT 0,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`, (err) => {

    if (err) {
        console.error(
            "User Progress Table Error:",
            err.message
        );
    } else {
        console.log(
            "User Progress table ready!"
        );
    }

});


// ==========================================
// PRACTICE ATTEMPTS TABLE
// ==========================================

db.run(`
    CREATE TABLE IF NOT EXISTS practice_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        company_id INTEGER,
        topic_id INTEGER,
        question_id INTEGER,
        selected_answer TEXT,
        is_correct INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (company_id) REFERENCES companies(id),
        FOREIGN KEY (topic_id) REFERENCES topics(id),
        FOREIGN KEY (question_id) REFERENCES questions(id)
    )
`, (err) => {

    if (err) {
        console.error(
            "Practice Attempts Table Error:",
            err.message
        );
    } else {
        console.log(
            "Practice Attempts table ready!"
        );
    }

});


// ==========================================
// MOCK TEST ATTEMPTS TABLE
// ==========================================

db.run(`
    CREATE TABLE IF NOT EXISTS test_attempts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        company_id INTEGER,
        total_questions INTEGER DEFAULT 0,
        correct_answers INTEGER DEFAULT 0,
        score INTEGER DEFAULT 0,
        percentage REAL DEFAULT 0,
        completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (company_id) REFERENCES companies(id)
    )
`, (err) => {

    if (err) {
        console.error(
            "Mock Test Attempts Table Error:",
            err.message
        );
    } else {
        console.log(
            "Mock Test Attempts table ready!"
        );
    }

});


// ==========================================
// DAILY CHALLENGE TABLE
// ==========================================

db.run(`
    CREATE TABLE IF NOT EXISTS daily_challenges (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        challenge_date TEXT NOT NULL,
        score INTEGER DEFAULT 0,
        completed INTEGER DEFAULT 0,
        completed_at DATETIME,
        FOREIGN KEY (user_id) REFERENCES users(id),
        UNIQUE(user_id, challenge_date)
    )
`, (err) => {

    if (err) {
        console.error(
            "Daily Challenge Table Error:",
            err.message
        );
    } else {
        console.log(
            "Daily Challenge table ready!"
        );
        migrateDailyChallengeColumns();
    }

});


// ==========================================
// DAILY CHALLENGE MIGRATION
// ==========================================

function migrateDailyChallengeColumns() {
    db.all("PRAGMA table_info(daily_challenges)", (err, columns) => {
        if (err) {
            console.error("Daily challenge schema error:", err.message);
            return;
        }

        const existingColumns = new Set(columns.map(column => column.name));
        const migrations = [
            ["question_ids", "TEXT"],
            ["answers_json", "TEXT"],
            ["current_index", "INTEGER DEFAULT 0"]
        ];

        const addNextColumn = (index) => {
            if (index >= migrations.length) {
                return;
            }

            const [columnName, columnType] = migrations[index];

            if (existingColumns.has(columnName)) {
                addNextColumn(index + 1);
                return;
            }

            db.run(
                `ALTER TABLE daily_challenges ADD COLUMN ${columnName} ${columnType}`,
                (alterErr) => {
                    if (alterErr) {
                        console.error(
                            `Unable to add daily_challenges.${columnName}:`,
                            alterErr.message
                        );
                    } else {
                        console.log(`daily_challenges.${columnName} added`);
                    }

                    addNextColumn(index + 1);
                }
            );
        };

        addNextColumn(0);
    });
}


// ==========================================
// FILL MISSING COMPANY-TOPIC QUESTIONS
// ==========================================

setTimeout(() => {

    const templates = {
        "time, speed & distance": (index) => {
            const hours = index + 1;
            const distance = hours * 60;

            return {
                question: `A car travels at 60 km/hr for ${hours} hour${hours === 1 ? "" : "s"}. What distance does it cover?`,
                option_a: `${distance} km`,
                option_b: `${distance + 10} km`,
                option_c: `${distance - 10} km`,
                option_d: `${distance + 20} km`,
                correct_answer: "A",
                explanation: `Distance = speed x time = 60 x ${hours} = ${distance} km.`
            };
        },
        "profit & loss": (index) => {
            const profit = (index + 1) * 10;
            const sellingPrice = 100 + profit;

            return {
                question: `An article costs Rs.100 and is sold at ${profit}% profit. What is its selling price?`,
                option_a: `Rs.${sellingPrice}`,
                option_b: `Rs.${sellingPrice + 10}`,
                option_c: `Rs.${sellingPrice - 10}`,
                option_d: `Rs.${sellingPrice + 20}`,
                correct_answer: "A",
                explanation: `Selling price = 100 + (${profit}% of 100) = Rs.${sellingPrice}.`
            };
        },
        "probability": () => ({
            question: "What is the probability of getting an even number when a fair die is rolled?",
            option_a: "1/2",
            option_b: "1/3",
            option_c: "1/6",
            option_d: "2/3",
            correct_answer: "A",
            explanation: "There are 3 even outcomes out of 6, so the probability is 3/6 = 1/2."
        }),
        "permutations & combinations": (index) => {
            const number = index + 1;
            const arrangements = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800][index];

            return {
                question: `In how many ways can ${number} distinct objects be arranged?`,
                option_a: `${arrangements}`,
                option_b: `${arrangements + number}`,
                option_c: `${Math.max(1, arrangements - number)}`,
                option_d: `${arrangements * 2}`,
                correct_answer: "A",
                explanation: `The number of arrangements is ${number}! = ${arrangements}.`
            };
        },
        "permutation & combination": (index) => {
            const number = index + 1;
            const arrangements = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800][index];

            return {
                question: `In how many ways can ${number} distinct objects be arranged?`,
                option_a: `${arrangements}`,
                option_b: `${arrangements + number}`,
                option_c: `${Math.max(1, arrangements - number)}`,
                option_d: `${arrangements * 2}`,
                correct_answer: "A",
                explanation: `The number of arrangements is ${number}! = ${arrangements}.`
            };
        },
        "averages": (index) => {
            const first = index + 1;
            const second = first + 2;
            const average = first + 1;

            return {
                question: `What is the average of ${first} and ${second}?`,
                option_a: `${average}`,
                option_b: `${average + 1}`,
                option_c: `${average - 1}`,
                option_d: `${second}`,
                correct_answer: "A",
                explanation: `Average = (${first} + ${second}) / 2 = ${average}.`
            };
        },
        "number system": (index) => {
            const divisor = index + 8;
            const multiplier = index + 4;
            const remainder = (3 * (index + 1) % (divisor - 1)) + 1;
            const number = divisor * multiplier + remainder;

            return {
                question: `What is the remainder when ${number} is divided by ${divisor}?`,
                option_a: `${remainder}`,
                option_b: `${(remainder + 1) % divisor}`,
                option_c: `${(remainder + 2) % divisor}`,
                option_d: `${(remainder + 3) % divisor}`,
                correct_answer: "A",
                explanation: `${number} = ${divisor} × ${multiplier} + ${remainder}, so the remainder is ${remainder}.`
            };
        },
        "percentages": (index) => {
            const multiplier = index + 1;
            const base = 100 * multiplier;
            const percentage = 5 * multiplier;
            const amount = base * percentage / 100;

            return {
                question: `What is ${percentage}% of ${base}?`,
                option_a: `${amount}`,
                option_b: `${amount + 5}`,
                option_c: `${amount - 5}`,
                option_d: `${amount + 10}`,
                correct_answer: "A",
                explanation: `${percentage}% of ${base} = ${percentage}/100 × ${base} = ${amount}.`
            };
        },
        "data interpretation": (index) => {
            const dayOne = 12 + 2 * index;
            const dayTwo = 15 + 3 * index;
            const dayThree = 9 + index;
            const dayFour = 14 + 2 * index;
            const total = dayOne + dayTwo + dayThree + dayFour;

            return {
                question: `A shop records daily sales of ${dayOne}, ${dayTwo}, ${dayThree}, and ${dayFour} units over four days. What is the total sales volume?`,
                option_a: `${total} units`,
                option_b: `${total + 5} units`,
                option_c: `${total - 5} units`,
                option_d: `${total + 10} units`,
                correct_answer: "A",
                explanation: `Total sales = ${dayOne} + ${dayTwo} + ${dayThree} + ${dayFour} = ${total} units.`
            };
        },
        "ratio & proportion": (index) => {
            const firstPart = index + 2;
            const secondPart = index + 3;
            const unitValue = index + 5;
            const total = (firstPart + secondPart) * unitValue;
            const firstShare = firstPart * unitValue;

            return {
                question: `A total of ${total} items is divided in the ratio ${firstPart}:${secondPart}. How many items are in the first share?`,
                option_a: `${firstShare}`,
                option_b: `${firstShare + unitValue}`,
                option_c: `${firstShare - unitValue}`,
                option_d: `${firstShare + 2 * unitValue}`,
                correct_answer: "A",
                explanation: `The first share is ${firstPart}/${firstPart + secondPart} of ${total}, which equals ${firstShare}.`
            };
        },
        "time & work": (index) => {
            const firstDays = 3 * (index + 1);
            const secondDays = 2 * firstDays;
            const togetherDays = 2 * (index + 1);

            return {
                question: `Worker A can complete a job in ${firstDays} days and Worker B in ${secondDays} days. How many days will they take working together?`,
                option_a: `${togetherDays} days`,
                option_b: `${togetherDays + 1} days`,
                option_c: `${togetherDays - 1} days`,
                option_d: `${2 * togetherDays} days`,
                correct_answer: "A",
                explanation: `Combined rate = 1/${firstDays} + 1/${secondDays} = 1/${togetherDays} of the job per day, so they take ${togetherDays} days.`
            };
        }
    };

    db.all(
        `
            SELECT
                c.id AS company_id,
                c.name AS company_name,
                t.id AS topic_id,
                COUNT(q.id) AS existing_count,
                LOWER(t.name) AS topic_name
            FROM companies c
            CROSS JOIN topics t
            LEFT JOIN questions q
                ON q.company_id = c.id
                AND q.topic_id = t.id
            GROUP BY c.id, t.id
            HAVING COUNT(q.id) < 10
        `,
        [],
        (err, missingRows) => {
            if (err) {
                console.error("Missing question check failed:", err.message);
                return;
            }

            const insertSQL = `
                INSERT OR IGNORE INTO questions
                (
                    company_id,
                    topic_id,
                    question,
                    option_a,
                    option_b,
                    option_c,
                    option_d,
                    correct_answer,
                    explanation,
                    source
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            missingRows.forEach((row) => {
                const generator = templates[row.topic_name];

                if (!generator) return;

                for (let index = row.existing_count; index < 10; index += 1) {
                    const question = generator(index);
                    const questionText =
                        `[${row.company_name}] ${question.question}`;

                    db.run(insertSQL, [
                        row.company_id,
                        row.topic_id,
                        questionText,
                        question.option_a,
                        question.option_b,
                        question.option_c,
                        question.option_d,
                        question.correct_answer,
                        question.explanation,
                        "AptiPrep Original Practice Set"
                    ]);
                }
            });

            if (missingRows.length) {
                console.log(
                    `Filled ${missingRows.length} company-topic combinations to ten questions.`
                );
            }
        }
    );

}, 2000);

module.exports = db;
