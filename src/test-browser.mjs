import puppeteer from 'puppeteer';

(async () => {
  console.log("Launching puppeteer...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Capture console messages
  page.on('console', msg => {
    console.log(`BROWSER CONSOLE [${msg.type()}]:`, msg.text());
  });

  page.on('pageerror', error => {
    console.log(`BROWSER ERROR:`, error.message);
  });

  page.on('requestfailed', request => {
    console.log(`BROWSER REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText}`);
  });

  console.log("Navigating to dashboard...");
  await page.goto('http://localhost:5173/waggle-ai-dashboard/', { waitUntil: 'networkidle0' });
  
  console.log("Page loaded. Checking HTML...");
  const content = await page.content();
  if (content.includes("Waggle AI Chatbot Dashboard")) {
    console.log("Header text found in DOM.");
  } else {
    console.log("Header text NOT found. DOM might be empty.");
  }
  
  await browser.close();
})();
