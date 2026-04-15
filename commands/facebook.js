const axios = require('axios')
const https = require('https')
const http = require('http')

module.exports = {
  name: 'fbdl',
  description: 'Download video Facebook. Contoh: !facebook https://www.facebook.com/share/r/xxx',
  async execute(sock, msg, from, args) {
    const url = args[0] || ''

    if (!url) {
      return await sock.sendMessage(from, { text: '❌ Masukkan URL Facebook.\nContoh: *!facebook https://www.facebook.com/share/r/xxx*' })
    }

    const fbRegex = /^https?:\/\/(www\.)?(facebook\.com|fb\.watch|fb\.com)\/.+/i
    if (!fbRegex.test(url)) {
      return await sock.sendMessage(from, { text: '❌ URL Facebook tidak valid.' })
    }

    await sock.sendMessage(from, { text: '⏳ Mengunduh video Facebook...' })

    try {
      const response = await axios.get('https://api.nekolabs.web.id/downloader/facebook', {
        params: { url },
        timeout: 30000
      })

      const result = response.data?.result
      if (!result) {
        return await sock.sendMessage(from, { text: '❌ Video tidak ditemukan atau tidak bisa didownload.' })
      }

      // Ambil link video — coba HD dulu, fallback ke SD
      const videoUrl =
        result?.hd ||
        result?.sd ||
        result?.links?.hd ||
        result?.links?.sd ||
        (Array.isArray(result) ? (result.find(r => r.quality === 'hd')?.url || result[0]?.url) : null)

      const title = result?.title || result?.name || 'Facebook Video'

      if (!videoUrl) {
        // Kirim raw result untuk debug
        console.log('FB result:', JSON.stringify(result, null, 2))
        return await sock.sendMessage(from, { text: '❌ Link video tidak ditemukan.' })
      }

      // Download buffer
      const buffer = await downloadBuffer(videoUrl)

      await sock.sendMessage(from, {
        video: buffer,
        caption: `🎬 *${title}*`,
        mimetype: 'video/mp4'
      })

    } catch (err) {
      console.error('Error facebook:', err?.response?.data || err.message)
      await sock.sendMessage(from, { text: '❌ Gagal mengunduh video. Coba lagi nanti.' })
    }
  }
}

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { timeout: 30000 }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return resolve(downloadBuffer(res.headers.location))
      }
      const chunks = []
      res.on('data', chunk => chunks.push(chunk))
      res.on('end', () => resolve(Buffer.concat(chunks)))
      res.on('error', reject)
    })
    req.on('error', reject)
    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Download timeout'))
    })
  })
}