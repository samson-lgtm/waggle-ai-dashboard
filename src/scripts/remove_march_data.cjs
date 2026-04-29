const fs = require('fs');
const path = require('path');

const wagglePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');

// 1. Read WAGGLE_AI_FULL_DATA
console.log('Reading WAGGLE_AI_FULL_DATA.csv...');
let waggleContent = fs.readFileSync(wagglePath, 'utf8');
let waggleLines = waggleContent.split('\n').filter(l => l.trim() !== '');
const header = waggleLines[0];
const dataLines = waggleLines.slice(1);

// 2. Filter out March data
const nonMarchLines = dataLines.filter(line => {
  const parts = line.split(',');
  const dateStr = parts[1];
  if (!dateStr) return true;
  
  // Robust check for March 2026
  const isMarch = (dateStr.includes('-03-') && dateStr.includes('2026')) || 
                  (dateStr.startsWith('2026-03-')) || 
                  (dateStr.startsWith('2026-3-')) ||
                  (dateStr.endsWith('-03-2026')) ||
                  (dateStr.endsWith('-3-2026'));
  
  return !isMarch;
});

console.log(`Original data lines: ${dataLines.length}`);
console.log(`Lines remaining after removing ALL March data: ${nonMarchLines.length}`);

// 3. Write back
const finalLines = [header, ...nonMarchLines];
fs.writeFileSync(wagglePath, finalLines.join('\n'), 'utf8');

console.log('Successfully removed all March data. WAGGLE_AI_FULL_DATA.csv is now ready for re-upload.');
