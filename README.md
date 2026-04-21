# AssistenWA - WhatsApp Assistant Bot

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:25D366,50:1f6feb,100:7f5af0&height=220&section=header&text=AssistenWA&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Advanced%20WhatsApp%20Assistant%20Bot%20with%20Anti-Delete%20%26%20Automation%20Features&descAlignY=58&descSize=18" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Required-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
  <img src="https://img.shields.io/badge/Status-Active-1f6feb?style=for-the-badge" />
  <img src="https://img.shields.io/badge/System-Modular-blueviolet?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Anti--Delete-ff6b6b?style=for-the-badge" />
</p>

---

## 📖 Overview

**AssistenWA** is an advanced yet lightweight WhatsApp assistant bot built using **Node.js** and powered by the **Baileys library**.  

This bot is designed not only as a simple automation tool, but also as a **smart assistant system** that focuses on message monitoring, recovery, and command-based interaction.

Unlike basic bots, AssistenWA combines:
- ⚡ Speed (lightweight architecture)
- 🧠 Smart command handling
- 🛠 Modular system for easy expansion
- 🔐 Anti-delete monitoring system

This makes it suitable for:
- Personal automation
- Admin monitoring
- Experimental bot development
- Learning WhatsApp bot internals

---

## 🎯 Core Concept

The main idea behind AssistenWA is:

> “Never lose deleted messages again.”

When a message or media is deleted by a user, the bot will:
1. Detect the deletion event
2. Retrieve the original content (if cached)
3. Preserve or forward it to a target account

This creates a powerful **anti-delete system** combined with assistant features.

---

## ✨ Features

### 🧩 Core Features
- Detect deleted **text messages**
- Detect deleted **media (image/video)**
- Restore deleted content
- Forward deleted messages automatically
- Lightweight runtime

### ⚙️ System Features
- Modular command handler (`commands/`)
- Dynamic command loader
- Easy to extend (add new commands)
- Clean code structure

### 🤖 Assistant Features
- Ping command
- Downloader commands (TikTok, IG, YouTube, etc.)
- Sticker maker
- Tag all members
- Utility-based commands

---

## 🧠 Why This Project?

Many WhatsApp bots are:
- Heavy
- Messy code
- Hard to maintain

**AssistenWA solves that by:**
- Keeping structure clean
- Using modular commands
- Making everything easy to edit

---

## 📂 Project Structure

.
├── index.js          # Main bot logic
├── commands/         # Command modules
├── package.json      # Dependencies
├── package-lock.json

---

## ⚙️ Requirements

Before running:

- Node.js (Recommended LTS)
- npm
- Active WhatsApp account

---

## 🚀 Installation

Clone repo:

git clone https://github.com/AnggaTechI/AssistenWA.git
cd AssistenWA

Install dependencies:

npm install

Run bot:

node index.js

---

## 🔧 Configuration

### index.js

const TARGET_JID = 'YOUR_NUMBER@s.whatsapp.net'

### commands/rvo.js

const botJid = 'YOUR_NUMBER@s.whatsapp.net'

### Example

const TARGET_JID = '6281234567890@s.whatsapp.net'

---

## ▶️ Usage

1. Run the bot
2. Login using WhatsApp QR / pairing code
3. Wait until connected
4. Bot starts monitoring automatically
5. Deleted messages will be captured

---

## ⚠️ Disclaimer

This project is created strictly for:

- Educational purposes
- System learning
- Authorized monitoring

The author is **NOT responsible** for:
- Privacy violations
- Illegal usage
- Misuse of recovered messages

Use responsibly and only in environments where you have permission.

---

## 🤝 Contributing

Contributions are welcome!

You can:
- Add new commands
- Improve performance
- Enhance UI/UX
- Report bugs

---

## 👨‍💻 Author

**AnggaTechI**  
https://github.com/AnggaTechI
