const db = require("./database");

console.log("========================================");
console.log("       APTIPREP QUESTION SEED");
console.log("========================================");


// ======================================================
// ALL QUESTIONS GO IN THIS ONE ARRAY
// ======================================================
//
// Format:
//
// {
//     company: "TCS",
//     topic: "Number System",
//     source: "Your verified source",
//     questions: [
//         {
//             question: "...",
//             option_a: "...",
//             option_b: "...",
//             option_c: "...",
//             option_d: "...",
//             correct_answer: "A",
//             explanation: "..."
//         }
//     ]
// }
//
// ======================================================


const questionData = [

    // ==================================================
    // TCS
    // ==================================================

    {
        company: "TCS",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Permutation",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Combination",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },

    {
        company: "TCS",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // INFOSYS
    // ==================================================

    {
        company: "Infosys",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Permutation",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Combination",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },

    {
        company: "Infosys",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // WIPRO
    // ==================================================

    {
        company: "Wipro",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Permutation",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Combination",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },

    {
        company: "Wipro",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // COGNIZANT
    // ==================================================

    {
        company: "Cognizant",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Permutation",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Combination",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },

    {
        company: "Cognizant",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // ACCENTURE
    // ==================================================

    {
        company: "Accenture",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Permutation",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Combination",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },

    {
        company: "Accenture",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // CAPGEMINI
    // ==================================================

    {
        company: "Capgemini",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Capgemini",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Capgemini",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Capgemini",
        topic: "Time, Speed and Distance",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // HCLTECH
    // ==================================================

    {
        company: "HCLTech",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "HCLTech",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "HCLTech",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "HCLTech",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // TECH MAHINDRA
    // ==================================================

    {
        company: "Tech Mahindra",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Tech Mahindra",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Tech Mahindra",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Tech Mahindra",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // IBM
    // ==================================================

    {
        company: "IBM",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "IBM",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "IBM",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "IBM",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // DELOITTE
    // ==================================================

    {
        company: "Deloitte",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Deloitte",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Deloitte",
        topic: "Time and Work",
        source: "Verified source",
        questions: []
    },

    {
        company: "Deloitte",
        topic: "Percentage, Profit and Loss",
        source: "Verified source",
        questions: []
    },


    // ==================================================
    // ZOHO
    // ==================================================

    {
        company: "Zoho",
        topic: "Number System",
        source: "Verified source",
        questions: []
    },

    {
        company: "Zoho",
        topic: "Probability",
        source: "Verified source",
        questions: []
    },

    {
        company: "Zoho",
        topic: "Logical Reasoning",
        source: "Verified source",
        questions: []
    },

    {
        company: "Zoho",
        topic: "Quantitative Aptitude",
        source: "Verified source",
        questions: []
    }

];


// ======================================================
// INSERT INTO DATABASE
// ======================================================

function insertAllQuestions() {

    let completed = 0;
    let failed = 0;

    const sql = `
        INSERT INTO questions
        (
            topic_id,
            question,
            option_a,
            option_b,
            option_c,
            option_d,
            correct_answer,
            explanation
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const stmt = db.prepare(sql);


    questionData.forEach((group) => {

        db.get(
            `
            SELECT id
            FROM companies
            WHERE LOWER(name) = LOWER(?)
            `,
            [group.company],

            (companyError, company) => {

                if (companyError) {
                    console.error(
                        `Company error (${group.company}):`,
                        companyError.message
                    );

                    failed++;
                    return;
                }

                if (!company) {
                    console.log(
                        `Company not found: ${group.company}`
                    );

                    failed++;
                    return;
                }


                db.get(
                    `
                    SELECT id
                    FROM topics
                    WHERE company_id = ?
                    AND LOWER(name) = LOWER(?)
                    `,
                    [
                        company.id,
                        group.topic
                    ],

                    (topicError, topic) => {

                        if (topicError) {
                            console.error(
                                `Topic error (${group.company} → ${group.topic}):`,
                                topicError.message
                            );

                            failed++;
                            return;
                        }

                        if (!topic) {
                            console.log(
                                `Topic not found: ${group.company} → ${group.topic}`
                            );

                            failed++;
                            return;
                        }


                        if (!group.questions.length) {
                            return;
                        }


                        group.questions.forEach((q) => {

                            stmt.run(
                                topic.id,
                                q.question,
                                q.option_a,
                                q.option_b,
                                q.option_c,
                                q.option_d,
                                q.correct_answer,
                                q.explanation,

                                (error) => {

                                    if (error) {

                                        console.error(
                                            "Question insert error:",
                                            error.message
                                        );

                                        failed++;

                                    } else {

                                        completed++;

                                    }

                                }
                            );

                        });

                    }
                );

            }
        );

    });


    stmt.finalize(() => {

        console.log("");
        console.log("========================================");
        console.log("       QUESTION SEED COMPLETED");
        console.log("========================================");

        console.log(
            `Questions inserted : ${completed}`
        );

        console.log(
            `Errors              : ${failed}`
        );

        console.log(
            "========================================"
        );

        db.close();

    });

}


// ======================================================
// RUN
// ======================================================

insertAllQuestions();