import { chromium } from 'playwright-core'
import path from 'node:path'

const OUT_DIR = 'C:\\Users\\Lenovo\\AppData\\Local\\Temp\\claude\\C--Users-Lenovo-Desktop-BrainItFuture\\4a7889d1-423e-41ba-8fdf-d5b8cd0c8927\\scratchpad'

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 },
]

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
})

const errors = []

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } })
  const page = await context.newPage()
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(`[${vp.name}] ${msg.text()}`)
  })
  page.on('pageerror', (err) => errors.push(`[${vp.name}] pageerror: ${err.message}`))

  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1800)
  await page.screenshot({ path: path.join(OUT_DIR, `hero-${vp.name}.png`) })

  await page.evaluate(() => {
    const el = document.getElementById('countdown')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(OUT_DIR, `countdown-${vp.name}.png`) })

  await page.evaluate(() => {
    const el = document.getElementById('services')
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
  })
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(OUT_DIR, `services-${vp.name}.png`) })

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(500)
  await page.screenshot({ path: path.join(OUT_DIR, `footer-${vp.name}.png`) })

  if (vp.name === 'desktop') {
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.waitForTimeout(300)
    await page.click('text=Notify Me')
    await page.waitForTimeout(500)
    await page.screenshot({ path: path.join(OUT_DIR, `notify-modal-${vp.name}.png`) })
  }

  await context.close()
}

await browser.close()

if (errors.length) {
  console.log('CONSOLE_ERRORS:')
  console.log(errors.join('\n'))
} else {
  console.log('CONSOLE_ERRORS: none')
}
