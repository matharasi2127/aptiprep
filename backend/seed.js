const db = require("./database");
const questions = require("./seed-data");

console.log("Starting AptiPrep question seeding...");
console.log("Questions found:", questions.length);

db.serialize(() => {
    db.run("BEGIN TRANSACTION");

    const insertSQL = `
        INSERT OR IGNORE INTO questions (
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

    const stmt = db.prepare(insertSQL);

    let inserted = 0;
    let skipped = 0;
    let failed = 0;

    function processQuestion(index) {

        if (index >= questions.length) {

            stmt.finalize((finalizeError) => {

                if (finalizeError) {
                    console.error(
                        "Statement finalize error:",
                        finalizeError.message
                    );

                    db.run("ROLLBACK", () => {
                        db.close();
                    });

                    return;
                }

                db.run("COMMIT", (commitError) => {

                    if (commitError) {

                        console.error(
                            "Commit failed:",
                            commitError.message
                        );

                        db.run("ROLLBACK", () => {
                            db.close();
                        });

                        return;
                    }

                    console.log("");
                    console.log("======================================");
                    console.log("QUESTION SEEDING COMPLETED");
                    console.log("======================================");
                    console.log("Total in seed-data.js :", questions.length);
                    console.log("Inserted               :", inserted);
                    console.log("Skipped / duplicates   :", skipped);
                    console.log("Failed                 :", failed);
                    console.log("======================================");

                    db.close();
                });
            });

            return;
        }

        const item = questions[index];

        // Basic validation
        if (
            !item ||
            !item.company ||
            !item.topic ||
            !item.question ||
            !item.option_a ||
            !item.option_b ||
            !item.option_c ||
            !item.option_d ||
            !item.correct_answer ||
            !item.explanation
        ) {

            console.log(
                `⚠️ Skipping incomplete question at index ${index}`
            );

            skipped++;
            processQuestion(index + 1);
            return;
        }

        // Find company
        db.get(
            "SELECT id FROM companies WHERE LOWER(name) = LOWER(?)",
            [item.company.trim()],
            (companyError, companyRow) => {

                if (companyError) {

                    console.error(
                        `❌ Company lookup failed at index ${index}:`,
                        companyError.message
                    );

                    failed++;
                    processQuestion(index + 1);
                    return;
                }

                if (!companyRow) {

                    console.log(
                        `⚠️ Company not found at index ${index}: ${item.company}`
                    );

                    skipped++;
                    processQuestion(index + 1);
                    return;
                }

                // Find topic
                db.get(
                    "SELECT id FROM topics WHERE LOWER(name) = LOWER(?)",
                    [item.topic.trim()],
                    (topicError, topicRow) => {

                        if (topicError) {

                            console.error(
                                `❌ Topic lookup failed at index ${index}:`,
                                topicError.message
                            );

                            failed++;
                            processQuestion(index + 1);
                            return;
                        }

                        if (!topicRow) {

                            console.log(
                                `⚠️ Topic not found at index ${index}: ${item.topic}`
                            );

                            skipped++;
                            processQuestion(index + 1);
                            return;
                        }

                        const values = [
                            companyRow.id,
                            topicRow.id,
                            item.question.trim(),
                            item.option_a,
                            item.option_b,
                            item.option_c,
                            item.option_d,
                            item.correct_answer.trim().toUpperCase(),
                            item.explanation,
                            item.source || "Source not specified"
                        ];

                        stmt.run(values, function (insertError) {

                            if (insertError) {

                                console.error(
                                    `❌ Question ${index + 1} failed:`,
                                    insertError.message
                                );

                                failed++;

                            } else if (this.changes === 1) {

                                inserted++;

                            } else {

                                skipped++;
                            }

                            processQuestion(index + 1);
                        });
                    }
                );
            }
        );
    }

    processQuestion(0);
});