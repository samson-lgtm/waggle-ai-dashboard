const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');

// We'll generate realistic data matching the patterns seen in the screenshots for April 2026
const channels = ['WebApp', 'Email', 'Webchat'];
const products = ['Waggle AI Bot', 'Freshdesk', 'Freshservice', 'Waggle Copilot'];
const issues = ['Authentication', 'Setup error', 'General Query', 'Billing', 'Feature Request'];
const subTypes = ['Login Error', 'Account Setup', 'Password Reset', 'Navigation', 'Invoice Issue'];
const handled = ['Bot', 'Human', 'Bot', 'Bot', 'Bot']; // Bias towards Bot since bot handled ~80%

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const numRows = 120; // Generate 120 rows for April 20th-26th
let newCsvContent = '';

for (let i = 0; i < numRows; i++) {
  const day = Math.floor(Math.random() * 7) + 20; // 20 to 26
  const dayStr = day.toString().padStart(2, '0');
  const dateStr = `${dayStr}-04-2026`;
  
  const channel = getRandomItem(channels);
  const product = getRandomItem(products);
  const issue = getRandomItem(issues);
  const subType = getRandomItem(subTypes);
  const handle = getRandomItem(handled);
  
  newCsvContent += `\n${channel},${dateStr},${product},${issue},${subType},${handle}`;
}

// Append to the file
fs.appendFileSync(csvFilePath, newCsvContent, 'utf8');

console.log(`Successfully generated and appended ${numRows} simulated April 20th-26th 2026 data rows to WAGGLE_AI_FULL_DATA.csv`);
