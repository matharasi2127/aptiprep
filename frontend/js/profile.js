const API_URL = "https://aptiprep-1zyu.onrender.com/api";

document.addEventListener("DOMContentLoaded", () => {
	loadProfile();
	document.getElementById("profileForm").addEventListener("submit", saveProfile);
});

function getToken() {
	return localStorage.getItem("aptiprep_token");
}

async function loadProfile() {
	const token = getToken();

	if (!token) {
		window.location.href = "login.html";
		return;
	}

	try {
		const response = await fetch(`${API_URL}/users/me`, {
			headers: { Authorization: `Bearer ${token}` }
		});
		const data = await response.json();

		if (!response.ok || !data.success) {
			throw new Error(data.message || "Unable to load profile");
		}

		document.getElementById("profileName").value = data.user.name || "";
		document.getElementById("profileEmail").value = data.user.email || "";
	} catch (error) {
		showMessage("profileError", error.message);
	}
}

async function saveProfile(event) {
	event.preventDefault();

	const token = getToken();
	const name = document.getElementById("profileName").value.trim();
	const button = document.getElementById("saveProfileBtn");

	if (!name) {
		showMessage("profileError", "Name is required.");
		return;
	}

	button.disabled = true;
	button.textContent = "Saving...";

	try {
		const response = await fetch(`${API_URL}/users/profile`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`
			},
			body: JSON.stringify({ name })
		});
		const data = await response.json();

		if (!response.ok || !data.success) {
			throw new Error(data.message || "Unable to save profile");
		}

		const storedUser = JSON.parse(localStorage.getItem("aptiprep_user") || "{}");
		storedUser.name = name;
		localStorage.setItem("aptiprep_user", JSON.stringify(storedUser));
		showMessage("profileMessage", "Profile saved successfully.");
	} catch (error) {
		showMessage("profileError", error.message);
	} finally {
		button.disabled = false;
		button.textContent = "Save Profile";
	}
}

function showMessage(id, message) {
	document.getElementById("profileMessage").textContent = "";
	document.getElementById("profileError").textContent = "";
	document.getElementById(id).textContent = message;
}
