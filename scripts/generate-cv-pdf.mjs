import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const DOCS_DIR = fileURLToPath(new URL("../docs/", import.meta.url));
const PORT = 4322;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".woff2": "font/woff2",
};

function serveDocs() {
  const server = createServer((req, res) => {
    let filePath = join(DOCS_DIR, decodeURIComponent(req.url.split("?")[0]));
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      filePath = join(filePath, "index.html");
    }
    if (!existsSync(filePath)) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME_TYPES[extname(filePath)] ?? "application/octet-stream" });
    createReadStream(filePath).pipe(res);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

const server = await serveDocs();

try {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/cv/`, { waitUntil: "networkidle0" });
  await page.emulateMediaType("print");
  await page.pdf({
    path: join(DOCS_DIR, "pete-benbow-cv.pdf"),
    format: "letter",
    printBackground: true,
    margin: { top: "0.75in", bottom: "0.75in", left: "0.75in", right: "0.75in" },
  });
  await browser.close();
  console.log("Generated docs/pete-benbow-cv.pdf");
} finally {
  server.close();
}
