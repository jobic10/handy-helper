## 📌 Handy Helper — RLHF Workflow Assistant

**Handy Helper** is a Chrome extension built to streamline the workflow for RLHF tasks. It automates saving your current progress as a PDF and uploading it to the appropriate Google Drive folder with a single click — all while naming files intelligently.

---

### 🚀 Features

* Automatically names PDF using your configured team number and Drive title.
* One-click PDF capture of the active task page.
* Uploads to the corresponding Google Drive folder.
* Options to select **Full Page** or **Visible Screen Only**.
* Configurable Team Number via Options page.

---

### 🧩 Installation Guide

1. Download or clone this repository to your local machine.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extension folder.
5. (Optional) Click the **📌 pin icon** next to "Handy Helper" to pin it to your Chrome toolbar.

---

### ⚙️ Configuring Your Team and Print Preferences

1. Right-click on the **Handy Helper** icon.
2. Select **"Options"**.
3. Enter your **Team Number** (e.g., `Team#8`) and choose whether to capture the **full page** or just the **visible screen area**.
4. Click **Save**.

---

### ✅ How to Use Handy Helper

Follow this structured workflow:

1. **On the Team Google Sheet**, change the status of the task to `In progress`.
2. Wait for the sheet to **automatically generate the Google Drive link**.
3. Click the generated **GDrive link** to open the task folder.
4. Navigate to the **RLHF tool** and begin answering the questions — but **do not submit yet**.
5. Click the **Handy Helper extension icon** in the Chrome toolbar.
6. The extension will **save the current task page as a PDF** and **upload it to the open Google Drive tab**.
7. Wait for the upload to finish (you’ll see the file appear in the folder).
8. **Close the tab with the Drive link** immediately afterward.
   ⚠️ *This is important to avoid issues when multiple Drive tabs are open.*
9. Go back to the **RLHF tool** and **submit the task**.
10. Finally, **mark the task as complete** on the Google Sheet.

---

### 💡 Best Practices

* Always **close the Drive tab** before moving to the next task.
* Pin the extension for easy access.
* Update your team number via the **Options** page if you're working across teams.
