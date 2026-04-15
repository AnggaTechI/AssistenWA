module.exports = {
  name: 'tagall',
  description: 'Tag semua member grup (hidden)',
  async execute(sock, msg, from, args) {
    if (!from.endsWith('@g.us')) {
      return await sock.sendMessage(from, { text: '❌ Command ini hanya bisa digunakan di grup!' })
    }

    const meta = await sock.groupMetadata(from)
    const members = meta.participants
    const mentions = members.map(m => m.id)

    // Pesan yang tampil hanya teks biasa, tapi semua member di-mention di balik layar
    const text = args.join(' ') || '📢 Perhatian semua!'

    await sock.sendMessage(from, { text, mentions })
  }
}