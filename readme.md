# Hi there, I'm [Your Name] 👋

## 🧩 Edge DNS Switcher

A lightweight Microsoft Edge extension that allows users to quickly switch between Default DNS and DNS over HTTPS (DoH). Improve your browsing privacy and security effortlessly.

### 🚀 Features

- Toggle easily between Default DNS and DNS over HTTPS (DoH).
- Uses Google's DoH by default; customizable to other providers like Cloudflare.
- Simple and intuitive user interface.

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

- Click the extension icon in Edge.
- Press the toggle button to switch DNS settings.
- The current DNS mode is displayed clearly.

### 🔧 Customization

To change the DoH provider, edit `popup.js`:

```javascript
const config = {
    secureDnsServers: ["https://dns.google/dns-query"] // Replace with your preferred DoH URL
}
```

Example providers:

- Google: `https://dns.google/dns-query`
- Cloudflare: `https://cloudflare-dns.com/dns-query`
- Quad9: `https://dns.quad9.net/dns-query`

### 🔐 Permissions

- `privacy`: Modify browser DNS settings.
- `storage`: Save DNS mode preferences.

### 🌐 Compatibility

- ✅ Microsoft Edge (Chromium-based)

### 📄 License

[MIT License](LICENSE)

---

_This project is part of my open-source portfolio. Feel free to explore, use, and contribute!_

⭐️ Star this repo if you found it useful!
