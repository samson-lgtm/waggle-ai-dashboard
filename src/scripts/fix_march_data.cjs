const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');

// 1. Read existing CSV and remove the last 120 lines (the simulated April data)
let csvContent = fs.readFileSync(csvFilePath, 'utf8');
let lines = csvContent.split('\n');

// Since we appended 120 lines and potential trailing newlines, let's remove exactly 120 rows
// But be safe by checking if they contain '-04-2026' to ensure we only delete April ones just in case
let validLines = lines.filter(line => {
    // Keep lines that DO NOT end with -04-2026 or have it in the date column
    return !line.includes('-04-2026');
});

// We need to generate realistic March data from 24-03-2026 to 29-03-2026
const channels = ['WebApp', 'Email', 'Webchat'];
const products = ['Waggle AI Bot', 'Freshdesk', 'Freshservice', 'Waggle Copilot'];
const issues = ['Authentication', 'Setup error', 'General Query', 'Billing', 'Feature Request'];
const subTypes = ['Login Error', 'Account Setup', 'Password Reset', 'Navigation', 'Invoice Issue'];
const handled = ['Bot', 'Human', 'Bot', 'Bot', 'Bot']; 

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const numRows = 120; // Generate 120 rows for Late March
let newCsvContent = validLines.join('\n');

// Generate 120 rows between 24th and 29th of March
for (let i = 0; i < numRows; i++) {
  const day = Math.floor(Math.random() * 6) + 24; // 24 to 29
  const dayStr = day.toString().padStart(2, '0');
  const dateStr = `${dayStr}-03-2026`;
  
  const channel = getRandomItem(channels);
  const product = getRandomItem(products);
  const issue = getRandomItem(issues);
  const subType = getRandomItem(subTypes);
  const handle = getRandomItem(handled);
  
  newCsvContent += `\n${channel},${dateStr},${product},${issue},${subType},${handle}`;
}

// Write the fixed file back
fs.writeFileSync(csvFilePath, newCsvContent, 'utf8');

console.log(`Successfully removed April data and added ${numRows} simulated March data rows (24-03-2026 to 29-03-2026) to WAGGLE_AI_FULL_DATA.csv`);
