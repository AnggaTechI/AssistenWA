const ytdlp = require('yt-dlp-exec')
const fs = require('fs')
const path = require('path')
const os = require('os')

const MAX_FILE_SIZE_MB = 45

function tooBig(filePath) {
  try {
    return fs.statSync(filePath).size > MAX_FILE_SIZE_MB * 1024 * 1024
  } catch (e) {
    return false
  }
}

function cleanup(filePath) {
  try {
    if (filePath && fs.existsSync(filePath)) fs.unlinkSync(filePath)
  } catch (e) {}
}

module.exports = {
  name: 'ig',
  description: 'Download foto/video Instagram. Contoh: !ig https://www.instagram.com/reel/xxx',
  async execute(sock, msg, from, args) {
    const url = args[0] || ''

    if (!url) {
      return await sock.sendMessage(from, { text: '❌ Masukkan URL Instagram.\nContoh: *!ig https://www.instagram.com/reel/xxx*' })
    }

    const igRegex = /^https?:\/\/(www\.)?instagram\.com\/.+/i
    if (!igRegex.test(url)) {
      return await sock.sendMessage(from, { text: '❌ URL Instagram tidak valid.' })
    }

    await sock.sendMessage(from, { text: '⏳ Mengunduh dari Instagram...' })

    const tmpFile = path.join(os.tmpdir(), `ig_${Date.now()}.mp4`)

    try {
      await ytdlp(url, {
        output: tmpFile,
        format: 'mp4',
        quiet: true,
        noProgress: true,
        geoBypass: true,
        retries: 5,
        noCheckCertificates: true,
      })

      if (!fs.existsSync(tmpFile)) {
        return await sock.sendMessage(from, { text: '❌ File tidak berhasil diunduh.' })
      }

      if (tooBig(tmpFile)) {
        cleanup(tmpFile)
        return await sock.sendMessage(from, { text: `❌ File terlalu besar (maks ${MAX_FILE_SIZE_MB}MB).` })
      }

      const buffer = fs.readFileSync(tmpFile)
      cleanup(tmpFile)

      await sock.sendMessage(from, {
        video: buffer,
        caption: '📸 *Instagram Video*',
        mimetype: 'video/mp4'
      })

    } catch (err) {
      cleanup(tmpFile)
      console.error('Error ig:', err.message)

      // Cek error umum
      if (err.message?.includes('login') || err.message?.includes('private')) {
        await sock.sendMessage(from, { text: '❌ Konten ini private atau membutuhkan login.' })
      } else if (err.message?.includes('404') || err.message?.includes('not found')) {
        await sock.sendMessage(from, { text: '❌ Konten tidak ditemukan atau sudah dihapus.' })
      } else {
        await sock.sendMessage(from, { text: '❌ Gagal mengunduh. Coba lagi nanti.' })
      }
    }
  }
}
