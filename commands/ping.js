const os = require('os')

const startTime = Date.now()

function formatUptime(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  let result = ''
  if (days > 0) result += `${days}h `
  if (hours > 0) result += `${hours}j `
  if (minutes > 0) result += `${minutes}m `
  result += `${seconds}d`
  return result
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`
}

function getCpuUsage() {
  const cpus = os.cpus()
  let totalIdle = 0, totalTick = 0
  for (const cpu of cpus) {
    for (const type in cpu.times) totalTick += cpu.times[type]
    totalIdle += cpu.times.idle
  }
  return (100 - (totalIdle / totalTick * 100)).toFixed(1)
}

function getLoadAvg() {
  const load = os.loadavg()
  return `${load[0].toFixed(2)} | ${load[1].toFixed(2)} | ${load[2].toFixed(2)}`
}

function getStatusBar(percent, length = 10) {
  const filled = Math.round((percent / 100) * length)
  return '█'.repeat(filled) + '░'.repeat(length - filled)
}

module.exports = {
  name: 'ping',
  description: 'Cek status bot, server, dan runtime',
  async execute(sock, msg, from, args) {
    const start = Date.now()
    await sock.sendMessage(from, { text: '⏳ Mengecek...' })
    const latency = Date.now() - start

    const botUptime    = formatUptime(Date.now() - startTime)
    const serverUptime = formatUptime(os.uptime() * 1000)

    const totalMem  = os.totalmem()
    const freeMem   = os.freemem()
    const usedMem   = totalMem - freeMem
    const memPercent = ((usedMem / totalMem) * 100).toFixed(1)

    const procMem    = process.memoryUsage()
    const cpuUsage   = getCpuUsage()
    const cpuModel   = os.cpus()[0]?.model || 'Unknown'
    const cpuCount   = os.cpus().length

    const now = new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'medium'
    })

    // Runtime stats
    const heapUsed  = procMem.heapUsed
    const heapTotal = procMem.heapTotal
    const heapPct   = ((heapUsed / heapTotal) * 100).toFixed(1)
    const external  = procMem.external
    const rss       = procMem.rss

    const text = `🏓 *Pong!*
━━━━━━━━━━━━━━━━━━
📡 *Latency:* ${latency}ms
🕐 *Waktu:* ${now}

🤖 *BOT INFO*
├ Uptime Bot: *${botUptime}*
├ Node.js: *${process.version}*
└ Platform: *${os.platform()} (${os.arch()})*

🖥️ *SERVER INFO*
├ Hostname: *${os.hostname()}*
├ Uptime Server: *${serverUptime}*
└ CPU: *${cpuModel} (${cpuCount} core)*

📊 *RESOURCE USAGE*
├ CPU Usage: *${cpuUsage}%* [${getStatusBar(parseFloat(cpuUsage))}]
├ Load Avg: *${getLoadAvg()}*
├ RAM: *${formatBytes(usedMem)} / ${formatBytes(totalMem)}* (${memPercent}%)
│  [${getStatusBar(parseFloat(memPercent))}]
└ RAM Bot: *${formatBytes(rss)}*

⚙️ *RUNTIME (Node.js)*
├ Heap Used: *${formatBytes(heapUsed)} / ${formatBytes(heapTotal)}* (${heapPct}%)
│  [${getStatusBar(parseFloat(heapPct))}]
└ External: *${formatBytes(external)}*

✅ *Status: Online*`

    await sock.sendMessage(from, { text })
  }
}
