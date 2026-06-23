import { chromium } from 'playwright';
import ffmpegPath from 'ffmpeg-static';
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const out = new URL('../public/assets/game-demo.webm', import.meta.url);
const framesDir = new URL('../.demo-frames/', import.meta.url);
const framesPath = fileURLToPath(framesDir);
const outPath = fileURLToPath(out);
const monsterPath = new URL('../public/assets/screamer-trash3d.png', import.meta.url);
const monsterData = `data:image/png;base64,${await fs.readFile(monsterPath, 'base64')}`;

await fs.rm(framesDir, { recursive: true, force: true });
await fs.mkdir(framesDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 1 });

await page.setContent(`
  <!doctype html>
  <html>
    <body style="margin:0;background:#020304;overflow:hidden">
      <canvas id="game" width="960" height="540"></canvas>
      <img id="monster" src="${monsterData}" style="display:none">
      <script>
        const canvas = document.querySelector('#game');
        const ctx = canvas.getContext('2d');
        const monster = document.querySelector('#monster');
        function drawShelf(x, z, side, t) {
          const scale = 620 / z;
          const w = 150 * scale;
          const h = 260 * scale;
          const sx = 480 + side * x * scale;
          const sy = 270 - h * 0.22;
          ctx.fillStyle = '#101315';
          ctx.fillRect(sx - w / 2, sy - h / 2, w, h);
          ctx.strokeStyle = '#62676b';
          ctx.lineWidth = Math.max(2, 5 * scale);
          for (let i = 0; i < 5; i += 1) {
            const y = sy - h / 2 + 30 * scale + i * 50 * scale;
            ctx.beginPath();
            ctx.moveTo(sx - w / 2, y);
            ctx.lineTo(sx + w / 2, y);
            ctx.stroke();
            for (let j = 0; j < 6; j += 1) {
              const hue = (j * 47 + i * 31 + t * 30) % 360;
              ctx.fillStyle = 'hsl(' + hue + ',70%,48%)';
              ctx.fillRect(sx - w / 2 + (15 + j * 20) * scale, y - 30 * scale, 12 * scale, 25 * scale);
            }
          }
        }
        window.drawFrame = (t) => {
          const flicker = Math.sin(t * 12) > 0.88 || Math.sin(t * 3.1) > 0.94 ? 0.32 : 1;
          const fog = Math.min(1, t / 18);
          const gradient = ctx.createLinearGradient(0, 0, 0, 540);
          gradient.addColorStop(0, '#050709');
          gradient.addColorStop(0.48, '#171a1c');
          gradient.addColorStop(1, '#060708');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, 960, 540);
          ctx.fillStyle = '#23272a';
          ctx.beginPath();
          ctx.moveTo(70, 540);
          ctx.lineTo(390, 218);
          ctx.lineTo(570, 218);
          ctx.lineTo(890, 540);
          ctx.closePath();
          ctx.fill();
          ctx.strokeStyle = 'rgba(255,255,255,.16)';
          ctx.lineWidth = 1.5;
          for (let i = 0; i < 13; i += 1) {
            const y = 250 + i * 21;
            ctx.beginPath();
            ctx.moveTo(50, y + i * 11);
            ctx.lineTo(910, y + i * 11);
            ctx.stroke();
          }
          for (let i = -7; i <= 7; i += 1) {
            ctx.beginPath();
            ctx.moveTo(480 + i * 20, 218);
            ctx.lineTo(480 + i * 88, 540);
            ctx.stroke();
          }
          for (let i = 0; i < 8; i += 1) {
            const z = 1.2 + i * 0.78 - (t * 0.16) % 0.78;
            drawShelf(0.86, z, -1, t);
            drawShelf(0.86, z, 1, t);
          }
          ctx.globalAlpha = 0.72 * flicker;
          ctx.fillStyle = '#e8f4ff';
          for (let i = 0; i < 5; i += 1) {
            const x = 150 + i * 158;
            ctx.fillRect(x, 42 + Math.sin(t * 2 + i) * 4, 100, 7);
          }
          ctx.globalAlpha = 1;
          const clientX = 480 + Math.sin(t * 0.9) * 135;
          const clientY = 292 + Math.sin(t * 2) * 8;
          ctx.fillStyle = 'rgba(20,22,24,.95)';
          ctx.beginPath();
          ctx.ellipse(clientX, clientY + 58, 24, 46, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#c49370';
          ctx.beginPath();
          ctx.arc(clientX, clientY, 22, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#111';
          ctx.fillRect(clientX - 18, clientY - 22, 36, 15);
          ctx.fillStyle = t > 5.6 ? '#ffee85' : '#151515';
          ctx.beginPath();
          ctx.arc(clientX - 8, clientY - 2, 3.5, 0, Math.PI * 2);
          ctx.arc(clientX + 8, clientY - 2, 3.5, 0, Math.PI * 2);
          ctx.fill();
          if (t > 6.4) {
            const m = Math.min(1, (t - 6.4) / 7.8);
            ctx.globalAlpha = 0.18 + 0.78 * m;
            const size = 80 + m * 440 + Math.sin(t * 15) * 8;
            ctx.drawImage(monster, 480 - size / 2 + Math.sin(t * 1.7) * 35, 190 - size * 0.36, size, size * 0.78);
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'rgba(90,0,0,' + (0.08 + m * 0.24) + ')';
            ctx.fillRect(0, 0, 960, 540);
          }
          if ((t > 3.5 && t < 4.1) || (t > 11.4 && t < 12.0) || (t > 16.2 && t < 16.8)) {
            const pulse = Math.sin(t * 32) * 0.5 + 0.5;
            ctx.globalAlpha = 0.2 + pulse * 0.22;
            ctx.drawImage(monster, 745, 90, 115, 90);
            ctx.globalAlpha = 1;
          }
          if (t > 14.5) {
            ctx.fillStyle = 'rgba(210,230,255,.18)';
            ctx.fillRect(90, 105, 150, 190);
            ctx.strokeStyle = 'rgba(220,245,255,.42)';
            ctx.strokeRect(90, 105, 150, 190);
            ctx.fillStyle = 'rgba(255,255,255,.72)';
            ctx.font = '700 14px Arial';
            ctx.fillText('CAM 03', 105, 130);
            ctx.globalAlpha = 0.55;
            ctx.drawImage(monster, 120, 155, 95, 78);
            ctx.globalAlpha = 1;
          }
          ctx.fillStyle = 'rgba(185,205,210,' + (0.12 + fog * 0.22) + ')';
          for (let i = 0; i < 16; i += 1) {
            ctx.beginPath();
            ctx.ellipse((i * 69 + t * 34) % 1040 - 40, 350 + Math.sin(i + t) * 70, 90, 14, 0, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = 'rgba(255,255,255,.82)';
          ctx.font = '700 18px Arial';
          ctx.fillText('Shesterochka Horror - 20 sec gameplay demo', 24, 38);
        };
      </script>
    </body>
  </html>
`);

await page.locator('#monster').evaluate((img) => img.decode().catch(() => undefined));
const canvas = page.locator('#game');
const fps = 15;
const frameCount = fps * 20;
for (let i = 0; i < frameCount; i += 1) {
  await page.evaluate((time) => window.drawFrame(time), i / fps);
  const name = String(i + 1).padStart(4, '0');
  await canvas.screenshot({ path: path.join(framesPath, `frame-${name}.png`) });
}
await browser.close();

await new Promise((resolve, reject) => {
  const ffmpeg = spawn(ffmpegPath, [
    '-y',
    '-framerate', String(fps),
    '-i', path.join(framesPath, 'frame-%04d.png'),
    '-c:v', 'libvpx-vp9',
    '-pix_fmt', 'yuva420p',
    '-b:v', '1800k',
    outPath,
  ], { stdio: 'inherit' });
  ffmpeg.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`ffmpeg exited with ${code}`))));
});

await fs.rm(framesDir, { recursive: true, force: true });
const stat = await fs.stat(out);
console.log(`saved ${fileURLToPath(out)} (${stat.size} bytes)`);
