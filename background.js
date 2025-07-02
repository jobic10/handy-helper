chrome.action.onClicked.addListener(async (tab) => {
  try {
    const allTabs = await chrome.tabs.query({});
    const driveTab = allTabs.find(t => t.url.includes("drive.google.com"));

    let driveTitle = "UnknownDrive";
    if (driveTab) {
      driveTitle = driveTab.title.split(" - ")[0].replace(/[\\/:*?"<>|]/g, "").trim();
    }

    const urlParts = tab.url.split("/");
    const taskId = urlParts[urlParts.length - 1];

    const { teamNumber, printMode } = await new Promise((resolve) =>
      chrome.storage.local.get(["teamNumber", "printMode"], resolve)
    );

    const team = teamNumber || "Team#2";
    const mode = printMode || "full";
    const filename = `${team}_${driveTitle}.pdf`;

    // 1. Copy Task ID to clipboard
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        console.log("Copied to clipboard:", text);
      },
      args: [taskId]
    });

    // 2. Inject html2pdf
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["html2pdf.bundle.min.js"]
    });

    // 3. Generate PDF
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (filename, mode) => {
        (async () => {
          window.scrollTo(0, 0);
          await new Promise(r => setTimeout(r, 2));

          const scrollTop = window.scrollY;
          const viewportHeight = window.innerHeight;
          const body = document.body;
          let target;

          if (mode === "visible") {
            const viewDiv = document.createElement("div");
            viewDiv.style.position = "absolute";
            viewDiv.style.top = scrollTop + "px";
            viewDiv.style.left = "0";
            viewDiv.style.width = "100%";
            viewDiv.style.height = viewportHeight + "px";
            viewDiv.style.overflow = "hidden";
            viewDiv.style.zIndex = "9999999";
            viewDiv.style.background = "white";

            const clone = body.cloneNode(true);
            clone.style.marginTop = `-${scrollTop}px`;
            viewDiv.appendChild(clone);
            document.body.appendChild(viewDiv);
            target = viewDiv;
          } else {
            target = body;
          }

          html2pdf()
            .set({ filename, image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 } })
            .from(target)
            .save()
            .then(() => {
              if (mode === "visible" && target && target.remove) {
                target.remove(); // Clean up
              }
            });
        })();
      },
      args: [filename, mode]
    });

  } catch (err) {
    console.error("PDF generation error:", err);
    alert("Error: " + err.message);
  }
});
