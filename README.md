# WhatsApp Anti-Delete Bot

A lightweight WhatsApp bot built with Node.js that helps monitor and preserve deleted messages and media for authorized use cases.

This project is mainly focused on **anti-delete functionality**, allowing the bot to detect deleted messages or media and forward or preserve them based on your configuration.

---

## ✨ Main Features

- Anti-delete **text messages**
- Anti-delete **media messages**
- Automatically detects deleted content
- Can forward deleted content to a target WhatsApp account
- Lightweight project structure
- Easy to configure and customize

---

## 📌 Main Purpose

The primary purpose of this bot is to provide an **anti-delete system for WhatsApp messages and media**.

When someone deletes a message or media, the bot can preserve or forward that content to the configured target account, depending on how the script is set up.

---

## 📂 Project Structure

```bash
.
├── index.js
├── commands/
├── package.json
├── package-lock.json
└── auth_info/
```

Important: auth_info/ usually contains session/login data and should never be uploaded to a public GitHub repository.

⚙️ Requirements

Make sure you have:

Node.js installed
npm installed
A WhatsApp account for bot authentication
🚀 Installation

Clone the repository:

git clone https://github.com/AnggaTechI/AssistenWA.git
cd AssistenWA

Install dependencies:

npm install

Run the bot:

node index.js
🔧 Configuration

In your code, you will find a line like this:

const TARGET_JID = 'YOUR_NOMER@s.whatsapp.net'

You must replace YOUR_NOMER with your own WhatsApp number in international format.

Example
const TARGET_JID = '6281234567890@s.whatsapp.net'
Important Notes
Replace YOUR_NOMER with your actual WhatsApp number
Use international format
Do not use +
Do not use spaces
Keep the suffix:
@s.whatsapp.net

Correct format:

628xxxxxxxxxx@s.whatsapp.net
▶️ Usage
Start the bot
Scan the QR code if prompted
Make sure TARGET_JID has been changed to your WhatsApp number
Wait until the bot is connected
The bot will monitor deleted messages and deleted media based on its anti-delete logic

⚠️ Disclaimer

This project is provided for educational, administrative, archival, and authorized use only.
The author is not responsible for any misuse, abuse, privacy violations, damage, or legal consequences caused by this project, whether intentional or unintentional. By using this software, you accept full responsibility for your actions and agree to use it only in environments where you have explicit permission and where such use complies with applicable laws and platform rules.

🤝 Contributing

Contributions, improvements, and suggestions are welcome.
Feel free to open an issue or submit a pull request.

👨‍💻 Author

Developed by AnggaTechI
GitHub: https://github.com/AnggaTechI
