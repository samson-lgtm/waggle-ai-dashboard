const fs = require('fs');
const path = require('path');

const wagglePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const chatbotPath = path.join(__dirname, '..', '..', 'Chatbot.csv');
const newbotPath = path.join(__dirname, '..', '..', 'New bot.csv');

// Helper to convert DD-MM-YYYY to YYYY-MM-DD
function normalizeDate(dateStr) {
  dateStr = dateStr.trim();
  // Check if it's already YYYY-MM-DD
  if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return dateStr;
  }
  // Check if it's DD-MM-YYYY
  const dmyMatch = dateStr.match(/^(\d{1,2})-(\d{1,2})-(\d{4})$/);
  if (dmyMatch) {
    const [, day, month, year] = dmyMatch;
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  return dateStr;
}

// Helper to normalize a CSV row
function normalizeRow(row) {
  let cleaned = row.trim();
  if (cleaned.endsWith(',')) {
    cleaned = cleaned.slice(0, -1);
  }
  const parts = cleaned.split(',');
  if (parts.length >= 2) {
    parts[1] = normalizeDate(parts[1]);
  }
  return parts.join(',');
}

// 1. Read and Clean WAGGLE_AI_FULL_DATA
console.log('Reading WAGGLE_AI_FULL_DATA.csv...');
let waggleContent = fs.readFileSync(wagglePath, 'utf8');
let waggleLines = waggleContent.split('\n').filter(l => l.trim() !== '');
const header = waggleLines[0];
const dataLines = waggleLines.slice(1);

const nonMarchLines = dataLines.filter(line => {
  const parts = line.split(',');
  const dateStr = parts[1];
  if (!dateStr) return true;
  
  // Robust check for March 2026
  // Format could be 2026-03-XX or XX-03-2026 or 2026-3-XX etc.
  const isMarch = (dateStr.includes('-03-') && dateStr.includes('2026')) || 
                  (dateStr.startsWith('2026-03-')) || 
                  (dateStr.startsWith('2026-3-')) ||
                  (dateStr.endsWith('-03-2026')) ||
                  (dateStr.endsWith('-3-2026'));
  
  return !isMarch;
});

console.log(`Original data lines: ${dataLines.length}`);
console.log(`Lines remaining after removing March data: ${nonMarchLines.length}`);

// 2. Read and normalize Chatbot.csv
console.log('Reading Chatbot.csv...');
let chatbotLines = [];
if (fs.existsSync(chatbotPath)) {
  chatbotLines = fs.readFileSync(chatbotPath, 'utf8').split('\n')
    .filter(l => l.trim() !== '')
    .slice(1) // Skip header
    .map(normalizeRow);
  console.log(`Read ${chatbotLines.length} lines from Chatbot.csv`);
} else {
  console.warn('Chatbot.csv not found!');
}

// 3. Read and normalize New bot.csv
console.log('Reading New bot.csv...');
let newbotLines = [];
if (fs.existsSync(newbotPath)) {
  newbotLines = fs.readFileSync(newbotPath, 'utf8').split('\n')
    .filter(l => l.trim() !== '')
    .slice(1) // Skip header
    .map(normalizeRow);
  console.log(`Read ${newbotLines.length} lines from New bot.csv`);
} else {
  console.warn('New bot.csv not found!');
}

// 4. Merge and Write
const finalLines = [header, ...nonMarchLines, ...chatbotLines, ...newbotLines];
console.log(`Final total lines: ${finalLines.length}`);

fs.writeFileSync(wagglePath, finalLines.join('\n'), 'utf8');
console.log('Successfully replaced March data in WAGGLE_AI_FULL_DATA.csv');
