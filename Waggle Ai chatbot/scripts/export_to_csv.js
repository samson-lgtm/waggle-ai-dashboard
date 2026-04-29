
const fs = require('fs');
const path = require('path');

const janPath = path.join(__dirname, 'src', 'imports', 'customer-support-log.csv');
const febPath = path.join(__dirname, 'src', 'app', 'data', 'defaultData.ts');
const marPath = path.join(__dirname, 'src', 'app', 'utils', 'loadMarchData.ts');

const outputCsvPath = path.join(__dirname, 'WAGGLE_AI_FULL_DATA.csv');

function formatJanToStandard(line) {
  if (!line || line.startsWith('Channel')) return null;
  const cols = line.split('\t');
  if (cols.length < 4) return null;
  // jan: Channel, Created at, Product, Issue, Type, Handled
  // mapping types: Scooby(Mobile) -> Inapp, Waggle Assist(Web) -> Webapp
  let channel = cols[0];
  if (channel === 'Scooby(Mobile)') channel = 'Inapp';
  else if (channel === 'Waggle Assist(Web)') channel = 'Webapp';
  
  return `${channel},${cols[1]},${cols[2]},${cols[3]},,${cols[5]}`;
}

function processFebData(content) {
  const lines = content.split('\n');
  const results = [];
  lines.forEach(line => {
    // Regex to match objects like { channel: "Webchat", createdAt: "01-02-2026", ... }
    const match = line.match(/\{ channel: "([^"]*)", createdAt: "([^"]*)", product: "([^"]*)", issue: "([^"]*)", subType: "([^"]*)", handled: "([^"]*)" \}/);
    if (match) {
      const dateParts = match[2].split('-');
      // Convert DD-MM-YYYY to YYYY-MM-DD
      const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      results.push(`${match[1]},${isoDate},${match[3]},${match[4]},${match[5]},${match[6]}`);
    }
  });
  return results;
}

function processMarData(content) {
  const startPattern = 'const marchCSV = `';
  const startIdx = content.indexOf(startPattern) + startPattern.length;
  const endIdx = content.indexOf('`;', startIdx);
  const csvPart = content.substring(startIdx, endIdx);
  
  const lines = csvPart.split('\n');
  const results = [];
  lines.forEach(line => {
    if (!line || line.startsWith('Channel')) return;
    const cols = line.split('\t');
    if (cols.length >= 6) {
      // Channel, created at, Product, Issue, Sub Type, Handled
      results.push(`${cols[0]},${cols[1]},${cols[2]},${cols[3]},${cols[4]},${cols[5]}`);
    }
  });
  return results;
}

const finalRows = ['Channel,Created at,Product,Issue,Sub Type,Handled'];

// Jan
const janContent = fs.readFileSync(janPath, 'utf8');
janContent.split('\n').forEach(line => {
  const formatted = formatJanToStandard(line.trim());
  if (formatted) finalRows.push(formatted);
});

// Feb
const febContent = fs.readFileSync(febPath, 'utf8');
finalRows.push(...processFebData(febContent));

// Mar
const marContent = fs.readFileSync(marPath, 'utf8');
finalRows.push(...processMarData(marContent));

fs.writeFileSync(outputCsvPath, finalRows.join('\n'));
console.log('Successfully generated WAGGLE_AI_FULL_DATA.csv with ' + finalRows.length + ' rows.');
