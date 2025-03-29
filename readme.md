# Hi there, I'm [Your Name] 👋

## 🧩 Edge DNS Resolver (Prototype)

This project was initially intended to be a Microsoft Edge extension that allows users to quickly switch between Default DNS and DNS over HTTPS (DoH). However, due to recent changes in the Chrome API, specifically the removal of `chrome.privacy.network.dnsOverHttpsMode` and `chrome.privacy.network.dnsOverHttpsTemplates`, the intended functionality is currently not achievable.

This version serves as a prototype demonstrating DNS resolution using the `chrome.dns.resolve` API.

### 🚀 Features

- Demonstrates DNS resolution using `chrome.dns.resolve`.
- Allows users to input a hostname and view its resolved DNS information.

### 📦 Installation

**Manual installation:**

1. Clone this repository or download the ZIP file and extract it.
2. Open Microsoft Edge and go to:

    ```shell
    edge://extensions
    ```

3. Enable `Developer mode`.
4. Click `Load unpacked` and select the extracted folder.

### 🛠 Usage

1. Click the extension icon in Edge.
2. Enter a hostname in the input field.
3. Click the "Resolve DNS" button.
4. The resolved DNS information will be displayed.

### ⚠️ Limitations

Due to the removal of the `chrome.privacy.network.dnsOverHttpsMode` and `chrome.privacy.network.dnsOverHttpsTemplates` APIs, this extension cannot currently toggle the system's DNS over HTTPS settings. It only demonstrates DNS resolution using the `chrome.dns.resolve` API.

### 🔐 Permissions

- `dns`: Allows the extension to use the `chrome.dns.resolve` API.

### 🌐 Compatibility

- ✅ Microsoft Edge (Chromium-based)

### 📄 License

[MIT License](LICENSE)

---

_This project is a demonstration of the capabilities of the `chrome.dns.resolve` API. Contributions and suggestions for alternative approaches are welcome!_

⭐️ Star this repo if you found it useful!
