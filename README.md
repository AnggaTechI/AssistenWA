# 🤖 AssistenWA

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:25D366,50:1f6feb,100:7f5af0&height=220&section=header&text=AssistenWA&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Lightweight%20WhatsApp%20Assistant%20Bot%20with%20Anti-Delete%20%26%20Smart%20Utility%20Features&descAlignY=58&descSize=18" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=22&pause=1000&color=25D366&center=true&vCenter=true&width=900&lines=WhatsApp+Assistant+Bot+for+Daily+Utility;Anti-Delete+Message+and+Media+Preserver;Modular+Commands+with+Simple+Node.js+Structure;Built+for+Educational+and+Authorized+Use" alt="Typing SVG" />
</p>

<p align="center">
  <a href="https://github.com/AnggaTechI/AssistenWA/stargazers"><img src="https://img.shields.io/github/stars/AnggaTechI/AssistenWA?style=for-the-badge&logo=github&color=1f6feb" /></a>
  <a href="https://github.com/AnggaTechI/AssistenWA/network/members"><img src="https://img.shields.io/github/forks/AnggaTechI/AssistenWA?style=for-the-badge&logo=github&color=7f5af0" /></a>
  <a href="https://github.com/AnggaTechI/AssistenWA/issues"><img src="https://img.shields.io/github/issues/AnggaTechI/AssistenWA?style=for-the-badge&logo=github&color=ff6b6b" /></a>
  <img src="https://img.shields.io/badge/Node.js-Required-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/WhatsApp-Bot-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=AnggaTechI&label=Profile%20Views&color=25D366&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-1f6feb?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Focus-Assistant%20%2B%20AntiDelete-ff8c42?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Maintenance-Easy-7f5af0?style=for-the-badge" />
</p>

---

## 🌟 Description

**AssistenWA** is a lightweight and modular **WhatsApp assistant bot** built with **Node.js**. It combines practical day-to-day utility commands with an **anti-delete system** that can preserve deleted messages or media and forward them to a configured account based on how the bot is set up.

This repository is designed for users who want a simple WhatsApp bot structure that is easy to run, easy to expand, and easy to customize. In addition to helper commands, the project also includes logic for handling deleted content, making it useful for **testing, learning, moderation, personal backup flows, and authorized automation scenarios**.

---

## ✨ Highlights

- 🧩 Modular command system
- 🗑️ Anti-delete message monitoring
- 🖼️ Deleted media preservation support
- 📩 Forwarding logic to a configured WhatsApp account
- ⚡ Lightweight Node.js project structure
- 🔧 Easy to edit and customize
- 🚀 Suitable as a starter base for WhatsApp assistant development

---

## 🎯 Core Focus

This project is centered around two main ideas:

### 1. WhatsApp Assistant Features
AssistenWA provides utility-style commands that make the bot feel like a lightweight assistant for common tasks and quick actions.

### 2. Anti-Delete Preservation System
When a message or media is deleted, the bot can preserve the content and route it according to the logic defined in the source code. This makes the bot useful for archival or administrative flows in environments where such behavior is explicitly authorized.

---

## 🧠 Available Command Style

The bot uses a modular structure, which means features can be separated into individual files inside the `commands` folder.

Examples from the current structure include:

- `help`
- `ping`
- `sticker`
- `tagall`
- `rvo`
- `facebook`
- `ig`
- `tiktok`
- `yt`

This design makes maintenance much easier because commands can be added, removed, or edited without rewriting the full bot logic.

---

## 📂 Project Structure

```bash
AssistenWA/
├── commands/
│   ├── facebook.js
│   ├── help.js
│   ├── ig.js
│   ├── ping.js
│   ├── rvo.js
│   ├── sticker.js
│   ├── tagall.js
│   ├── tiktok.js
│   └── yt.js
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Requirements

Before running the bot, make sure you have:

- **Node.js**
- **npm**
- A valid **WhatsApp account** for pairing/authentication
- A stable internet connection

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/AnggaTechI/AssistenWA.git
cd AssistenWA
```

Install dependencies:

```bash
npm install
```

Run the bot:

```bash
node index.js
```

---

## 🔧 Configuration

### 1. Configure target account in `index.js`

Find this line:

```js
const TARGET_JID = 'YOUR_NOMER@s.whatsapp.net'
```

Replace `YOUR_NOMER` with your WhatsApp number in international format.

Example:

```js
const TARGET_JID = '6281234567890@s.whatsapp.net'
```

### 2. Configure target account in `commands/rvo.js`

Find this line:

```js
const botJid = 'YOUR_NOMER@s.whatsapp.net'
```

Replace it with your WhatsApp number in international format.

Example:

```js
const botJid = '6281234567890@s.whatsapp.net'
```

---

## ▶️ How To Use

1. Start the bot using `node index.js`
2. Enter your WhatsApp number when prompted
3. Copy the pairing or verification code shown in the terminal
4. Link the WhatsApp account to the bot session
5. Make sure `TARGET_JID` in `index.js` has been updated
6. Make sure `botJid` in `commands/rvo.js` has been updated
7. After successful connection, use the bot according to the available commands and anti-delete logic

---

## 💡 Why This Project Is Nice

- Clean enough for beginners
- Small enough to learn quickly
- Flexible enough to expand
- Practical enough to use as a base project
- Good for experimenting with modular WhatsApp bot architecture

---

## 🛠️ Suggested Future Improvements

If you want to make this repo even better, here are some nice upgrade ideas:

- Move `TARGET_JID` and `botJid` into `.env`
- Add automatic command help menu
- Add admin-only permission system
- Add logging for deleted messages into local files
- Add better error handling and reconnect flow
- Add more assistant-style commands
- Add richer README screenshots or GIF previews

---

## ⚠️ Disclaimer

This project is provided for **educational, archival, administrative, testing, and other explicitly authorized use cases only**.

The author does **not** encourage misuse, privacy violations, unauthorized monitoring, abusive automation, or any activity that breaks platform rules, laws, or user consent. Anyone using this project is fully responsible for how it is configured and operated.

By using this repository, you agree that you will only use it in situations where you have proper authorization and where local laws, platform policies, and ethical boundaries are respected.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are always welcome.

If you want to improve AssistenWA, you can:

- Open an issue
- Submit a pull request
- Suggest a new feature
- Improve project structure or documentation

---

## 👨‍💻 Author

<p align="center">
  <a href="https://github.com/AnggaTechI">
    <img src="https://github-readme-stats.vercel.app/api?username=AnggaTechI&show_icons=true&theme=tokyonight&hide_border=true" />
  </a>
</p>

<p align="center">
  Developed by <b>AnggaTechI</b><br>
  GitHub: <a href="https://github.com/AnggaTechI">https://github.com/AnggaTechI</a>
</p>

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:25D366,50:1f6feb,100:7f5af0&height=120&section=footer" />
</p>
