const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const data = fs.readFileSync(csvFilePath, 'utf8');

const lines = data.split('\n');
const datesToRemove = [
  '2026-04-27', '2026-04-28', '2026-04-29', '2026-04-30',
  '27-04-2026', '28-04-2026', '29-04-2026', '30-04-2026'
];

let removedCount = 0;
const newLines = lines.filter((line, index) => {
  if (index === 0) return true; // keep header
  
  if (!line.trim()) return false; // remove empty lines
  
  const columns = line.split(',');
  if (columns.length > 1) {
    const dateCol = columns[1].trim();
    if (datesToRemove.includes(dateCol)) {
      removedCount++;
      return false; // remove this line
    }
  }
  return true;
});

fs.writeFileSync(csvFilePath, newLines.join('\n'), 'utf8');

console.log(`Successfully removed ${removedCount} rows with dates from April 27 to April 30.`);
