const fs = require('fs');
const path = require('path');

const wagglePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const chatbotPath = path.join(__dirname, '..', '..', 'Chatbot.csv');
const newbotPath = path.join(__dirname, '..', '..', 'New bot.csv');

// 1. Clean WAGGLE_AI_FULL_DATA (remove fake generated DD-MM-YYYY dates)
let waggleContent = fs.readFileSync(wagglePath, 'utf8');
let lines = waggleContent.split('\n');

// My generated fake rows used DD-MM-YYYY like 24-03-2026, 25-03-2026
// Filter out ANY line that explicitly contains these manually generated string formats
const validLines = lines.filter(line => {
  return !(
    line.includes(',24-03-2026,') || 
    line.includes(',25-03-2026,') || 
    line.includes(',26-03-2026,') || 
    line.includes(',27-03-2026,') || 
    line.includes(',28-03-2026,') || 
    line.includes(',29-03-2026,')
  );
});

console.log(`Original WAGGLE file had ${lines.length} lines. After stripping fake data: ${validLines.length} lines.`);

// 2. Read Chatbot.csv and New bot.csv
let chatbotLines = fs.readFileSync(chatbotPath, 'utf8').split('\n').filter(l => l.trim() !== '');
let newbotLines = fs.readFileSync(newbotPath, 'utf8').split('\n').filter(l => l.trim() !== '');

// Remove headers
chatbotLines.shift();
newbotLines.shift();

// Map and normalize just in case
function normalizeRow(row) {
  // some rows in New bot.csv end with an extra comma like `,Bot,`
  if (row.endsWith(',')) {
    row = row.slice(0, -1);
  }
  return row;
}

const cleanChatbot = chatbotLines.map(normalizeRow);
const cleanNewbot = newbotLines.map(normalizeRow);

console.log(`Found ${cleanChatbot.length} real rows in Chatbot.csv`);
console.log(`Found ${cleanNewbot.length} real rows in New bot.csv`);

// 3. Append to WAGGLE
const newWaggleData = [...validLines, ...cleanChatbot, ...cleanNewbot];

fs.writeFileSync(wagglePath, newWaggleData.join('\n'), 'utf8');

console.log(`Successfully merged real data. New WAGGLE_AI_FULL_DATA.csv has ${newWaggleData.length} rows.`);
