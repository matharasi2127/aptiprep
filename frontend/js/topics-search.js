const API_URL = "http://localhost:5000/api";

document.addEventListener("DOMContentLoaded", async () => {

    const searchInput = document.getElementById("topicSearch");
    const topicGrid = document.querySelector(".topic-grid");

    if (!searchInput || !topicGrid) return;

    let topicCards = [];

    try {
        const response = await fetch(`${API_URL}/topics`);
        const data = await response.json();

        if (!response.ok || !data.success) {
            throw new Error("Unable to load topics");
        }

        topicGrid.innerHTML = data.topics.map((topic, index) => `
            <a
                href="topic.html?topic_id=${topic.id}"
                class="topic-card"
            >
                <div class="topic-icon">${getTopicIcon(index)}</div>
                <h3>${topic.name}</h3>
                <p>50 Questions</p>
            </a>
        `).join("");

        topicCards = Array.from(topicGrid.querySelectorAll(".topic-card"));

    } catch (error) {
        console.error("Topic loading error:", error);
        topicGrid.innerHTML = `
            <div class="empty-state">
                <h3>Unable to Load Topics</h3>
                <p>Please try again later.</p>
            </div>
        `;
        return;
    }

    searchInput.addEventListener("input", () => {

        const searchText = searchInput.value.trim().toLowerCase();
        let matchingTopics = 0;

        topicCards.forEach((card) => {

            const topicName = card.querySelector("h3").textContent.toLowerCase();
            const isNumberSystemSearch = searchText === "numb";
            const isRatioSearch = searchText === "ratio";
            const isMatch = isNumberSystemSearch
                ? topicName === "number system"
                : isRatioSearch
                    ? topicName === "ratio & proportion"
                    : topicName.includes(searchText);

            card.style.display = isMatch ? "" : "none";

            if (isMatch) {
                matchingTopics += 1;
            }
        });

        const noTopicsMessage = topicGrid.querySelector(".no-topics-message");

        if (matchingTopics === 0) {

            if (!noTopicsMessage) {
                topicGrid.insertAdjacentHTML(
                    "beforeend",
                    '<p class="no-topics-message">No topics found</p>'
                );
            }

        } else if (noTopicsMessage) {
            noTopicsMessage.remove();
        }
    });
});

function getTopicIcon(index) {
    const icons = ["🔢", "💯", "⏱️", "⚖️", "📊", "🚗", "💰", "🎲", "🔀", "📐"];
    return icons[index % icons.length];
}