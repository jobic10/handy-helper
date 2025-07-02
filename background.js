chrome.action.onClicked.addListener(async (tab) => {
  const allTabs = await chrome.tabs.query({});
  const driveTab = allTabs.find(t => t.title.includes("Google Drive"));
  const driveTitle = driveTab ? driveTab.title.split(" - ")[0] : "UnknownDrive";

  chrome.storage.local.get(["teamNumber", "printMode"], async (data) => {
    const team = data.teamNumber || "Team#2";
    const mode = data.printMode || "full";
    const filename = `${team}_${driveTitle}.pdf`;

    try {

      const urlParts = tab.url.split("/");
      const taskId = urlParts[urlParts.length - 1];

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


      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["html2pdf.bundle.min.js"]
      });

      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (filename, mode) => {
          const scrollTop = window.scrollY;
          const viewportHeight = window.innerHeight;
          const body = document.body;

          let target;

          if (mode === "visible") {
            // Create a div representing just the visible area
            const viewDiv = document.createElement("div");
            viewDiv.style.position = "absolute";
            viewDiv.style.top = scrollTop + "px";
            viewDiv.style.left = "0";
            viewDiv.style.width = "100%";
            viewDiv.style.height = viewportHeight + "px";
            viewDiv.style.overflow = "hidden";
            viewDiv.style.zIndex = "9999999";
            viewDiv.style.background = "white";

            // Clone the body into it
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
                target.remove(); // clean up overlay
              }
            });
        },
        args: [filename, mode]
      });
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Error: " + err.message);
    }
  });
});
