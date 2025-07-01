
## 📌 Handy Helper — RLHF Workflow Assistant

**Handy Helper** is a Chrome extension designed to streamline RLHF task workflows. It lets you instantly save a snapshot of your task page as a well-named PDF using your team number and an open Drive tab title — helping teams stay organized and consistent.

---

### 🚀 Features

* One-click PDF capture of the current RLHF task page.
* Automatically names the PDF using your configured **team number** and **Drive folder tab title**.
* Option to capture either the **entire page** or just the **visible area**.
* Saves your team settings and preferences across sessions.

---

### 🧩 Installation Guide

1. Download or clone this repository.
2. Open **Google Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right corner).
4. Click **“Load unpacked”** and select the extension folder.
5. (Optional) Click the 📌 **pin icon** next to **Handy Helper** to pin it to your Chrome toolbar.

---

### ⚙️ Configuration (One-Time Setup)

1. Right-click on the **Handy Helper** icon in the toolbar.
2. Click **“Options.”**
3. Set your **team number** (e.g., `Team#2`).
4. Choose whether to capture the **full page** or just the **visible area**.
5. Click **Save.**

---

### ✅ RLHF Workflow with Handy Helper

1. In the team Google Sheet, move a task to `In progress`.
2. Wait for the sheet to generate the **Google Drive folder link**.
3. Click the link to open the **Drive folder**.
4. Open the **RLHF tool** and begin answering the questions (**do not submit yet**).
5. Click the **Handy Helper** icon to generate and download a PDF of the task page.
6. **Manually upload** the downloaded PDF to the open Drive folder.
7. **Wait for the upload to complete.**
8. **Close the Google Drive tab**.
   ⚠️ *This is very important to avoid confusion or misnaming if multiple Drive tabs are open.*
9. Submit the task on the **RLHF tool**.
10. Mark the task as **complete** on the team’s Google Sheet.

---

### 💡 Tips

* Always **upload the PDF manually** before closing the Drive tab.
* Keep your team number updated using the Options page.
* For consistent filenames, ensure only **one Drive tab is open** at a time.

---

Let me know if you'd also like the `description` line for GitHub (shorter tagline like:

> *A one-click PDF saver for RLHF task workflows, using team-configurable filenames.*

)