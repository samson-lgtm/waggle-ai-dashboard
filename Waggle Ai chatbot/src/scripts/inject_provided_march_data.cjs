const fs = require('fs');
const path = require('path');

const CSV_PATH = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const SOURCE_PATH = path.join(__dirname, 'march_full_collected.txt');

function injectData() {
  if (!fs.existsSync(CSV_PATH)) {
    console.error('CSV not found at', CSV_PATH);
    return;
  }
  if (!fs.existsSync(SOURCE_PATH)) {
    console.error('Source file not found at', SOURCE_PATH);
    return;
  }

  const rawSource = fs.readFileSync(SOURCE_PATH, 'utf8');
  const sourceLines = rawSource.split(/\r?\n/);
  
  const newMarchRows = [];
  sourceLines.forEach((line, index) => {
    if (!line.trim() || index === 0 && line.toLowerCase().includes('channel')) return; // Skip header or empty
    const parts = line.split('\t');
    if (parts.length < 2) return;

    // Map parts: Channel, created at, Product, Issue, Sub Type, Handled
    // Data looks like: Inapp	2026-03-01				Bot
    const channel = parts[0] || '';
    const date = parts[1] || '';
    const product = parts[2] || '';
    const issue = parts[3] || '';
    const subType = parts[4] || '';
    const handled = parts[5] || '';

    if (date.includes('2026-03-')) {
       newMarchRows.push(`${channel},${date},${product},${issue},${subType},${handled}`);
    }
  });

  console.log(`Parsed ${newMarchRows.length} new March rows from source.`);

  const csvContent = fs.readFileSync(CSV_PATH, 'utf8');
  const csvLines = csvContent.split(/\r?\n/);
  const header = csvLines[0];

  // Filter out any existing March 2026 rows from the main CSV
  const filteredLines = csvLines.filter((line, index) => {
    if (index === 0) return false; // Handle header separately
    return !line.includes(',2026-03-');
  });

  const finalLines = [header, ...filteredLines, ...newMarchRows];
  fs.writeFileSync(CSV_PATH, finalLines.join('\n'), 'utf8');

  console.log(`Successfully updated CSV. Total rows: ${finalLines.length}`);
}

injectData();
