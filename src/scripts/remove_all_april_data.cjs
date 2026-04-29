const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const data = fs.readFileSync(csvFilePath, 'utf8');

const lines = data.split('\n');

let removedCount = 0;
const newLines = lines.filter((line, index) => {
  if (index === 0) return true; // keep header
  
  if (!line.trim()) return false; // remove empty lines
  
  const columns = line.split(',');
  if (columns.length > 1) {
    const dateCol = columns[1].trim();
    // Check if the date belongs to April 2026 in either format
    if (dateCol.includes('2026-04-') || dateCol.includes('-04-2026')) {
      removedCount++;
      return false; // remove this line
    }
  }
  return true;
});

fs.writeFileSync(csvFilePath, newLines.join('\n'), 'utf8');

console.log(`Successfully removed ${removedCount} rows with April dates.`);
