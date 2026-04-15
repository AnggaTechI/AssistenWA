const axios = require('axios')
const https = require('https')
const http = require('http')

const RAPIDAPI_KEY = 'ca5c6d6fa3mshfcd2b0a0feac6b7p140e57jsn72684628152a'

module.exports = {
  name: 'ttdl',
  description: 'Download video TikTok. Contoh: !tiktok https://vt.tiktok.com/xxx',
  async execute(sock, msg, from, args) {
    const url = args[0] || ''

    if (!url) {
      return await sock.sendMessage(from, { text: '❌ Masukkan URL TikTok.\nContoh: *!tiktok https://vt.tiktok.com/ZSBhtXeVr/*' })
    }

    const tiktokRegex = /^https?:\/\/(www\.)?(tiktok\.com|vt\.tiktok\.com|vm\.tiktok\.com|m\.tiktok\.com)\/.+/i
    if (!tiktokRegex.test(url)) {
      return await sock.sendMessage(from, { text: '❌ URL TikTok tidak valid.\nFormat yang diterima:\n- https://tiktok.com/@user/video/xxx\n- https://vt.tiktok.com/xxx\n- https://vm.tiktok.com/xxx' })
    }

    await sock.sendMessage(from, { text: '⏳ Mengunduh video TikTok...' })

    try {
      const { data } = await axios.get('https://tiktok-scraper7.p.rapidapi.com', {
        headers: {
          'Accept-Encoding': 'gzip',
          'Connection': 'Keep-Alive',
          'Host': 'tiktok-scraper7.p.rapidapi.com',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'X-RapidAPI-Host': 'tiktok-scraper7.p.rapidapi.com',
          'X-RapidAPI-Key': RAPIDAPI_KEY
        },
        params: { url, hd: '1' },
        timeout: 30000
      })

      const video = data.data?.hdplay || data.data?.play || data.data?.nowatermark
      const title = data.data?.title || data.data?.desc || 'TikTok Video'
      const author = data.data?.author?.nickname || data.data?.author?.unique_id || 'Unknown'
      const likes = data.data?.stats?.digg_count || data.data?.stats?.like_count || 0
      const comments = data.data?.stats?.comment_count || 0
      const plays = data.data?.stats?.play_count || 0

      if (!video) {
        return await sock.sendMessage(from, { text: '❌ Video tidak ditemukan. Mungkin private atau sudah dihapus.' })
      }

      // Download video buffer
      const buffer = await downloadBuffer(video)

      const caption = `🎵 *${title}*\n\n👤 Author: @${author}\n❤️ Likes: ${likes.toLocaleString()}\n💬 Komentar: ${comments.toLocaleString()}\n▶️ Ditonton: ${plays.toLocaleString()}`

      await sock.sendMessage(from, {
        video: buffer,
        caption: caption,
        mimetype: 'video/mp4'
      })

    } catch (err) {
      console.error('Error tiktok:', err?.response?.data || err.message)

      const status = err?.response?.status
      if (status === 429) {
        return await sock.sendMessage(from, { text: '❌ Rate limit API tercapai. Coba lagi beberapa menit.' })
      } else if (status === 404) {
        return await sock.sendMessage(from, { text: '❌ Video tidak ditemukan atau sudah dihapus.' })
      }

      await sock.sendMessage(from, { text: '❌ Gagal mengunduh video. Coba lagi nanti.' })
    }
  }
}

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http
    const req = client.get(url, { timeout: 30000 }, (res) => {
      // Handle redirect
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