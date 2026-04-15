const fs = require('fs')
const path = require('path')

module.exports = {
  name: 'help',
  description: 'Tampilkan daftar command',
  async execute(sock, msg, from, args) {
    const commandsPath = path.join(__dirname)
    const files = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'))

    let text = '📋 *Daftar Command:*\n\n'
    files.forEach(file => {
      const cmd = require(path.join(commandsPath, file))
      text += `• *!${cmd.name}* — ${cmd.description}\n`
    })

    await sock.sendMessage(from, { text })
  }
}