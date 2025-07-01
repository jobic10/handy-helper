document.addEventListener("DOMContentLoaded", () => {
    const teamInput = document.getElementById("teamNumber");
    const modeInput = document.getElementById("printMode");
    const status = document.getElementById("status");

    // Load stored values
    chrome.storage.local.get(["teamNumber", "printMode"], (data) => {
        if (data.teamNumber) teamInput.value = data.teamNumber;
        if (data.printMode) modeInput.value = data.printMode;
    });

    document.getElementById("save").addEventListener("click", () => {
        const team = teamInput.value.trim();
        const mode = modeInput.value;

        chrome.storage.local.set(
            { teamNumber: team || "Team#2", printMode: mode || "full" },
            () => {
                status.textContent = "Saved!";
                setTimeout(() => (status.textContent = ""), 1500);
            }
        );
    });
});
