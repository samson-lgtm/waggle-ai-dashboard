
const fs = require('fs');
const path = require('path');

// Adjusted paths relative to src/scripts
const janPath = path.join(__dirname, '..', 'imports', 'customer-support-log.csv');
const febPath = path.join(__dirname, '..', 'app', 'data', 'defaultData.ts');
const marPath = path.join(__dirname, '..', 'app', 'utils', 'loadMarchData.ts');

const outputCsvPath = path.join(__dirname, '..', 'WAGGLE_AI_FULL_DATA.csv');

function formatJanToStandard(line) {
  if (!line || line.startsWith('Channel')) return null;
  const cols = line.split('\t');
  if (cols.length < 4) return null;
  
  let channel = cols[0];
  if (channel === 'Scooby(Mobile)') channel = 'Inapp';
  else if (channel === 'Waggle Assist(Web)') channel = 'Webapp';
  
  return `${channel},${cols[1]},${cols[2]},${cols[3]},,${cols[5]}`;
}

function processFebData(content) {
  const results = [];
  const lines = content.split('\n');
  lines.forEach(line => {
    const match = line.match(/\{ channel: "([^"]*)", createdAt: "([^"]*)", product: "([^"]*)", issue: "([^"]*)", subType: "([^"]*)", handled: "([^"]*)" \}/);
    if (match) {
      const dateParts = match[2].split('-');
      const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
      results.push(`${match[1]},${isoDate},${match[3]},${match[4]},${match[5]},${match[6]}`);
    }
  });
  return results;
}

function processMarData(content) {
  const startPattern = 'const marchCSV = `';
  const startIdx = content.indexOf(startPattern);
  if (startIdx === -1) return [];
  const startData = startIdx + startPattern.length;
  const endIdx = content.indexOf('`;', startData);
  const csvPart = content.substring(startData, endIdx);
  
  const lines = csvPart.split('\n');
  const results = [];
  lines.forEach(line => {
    if (!line || line.trim().startsWith('Channel')) return;
    const cols = line.split('\t');
    if (cols.length >= 6) {
      results.push(`${cols[0]},${cols[1]},${cols[2]},${cols[3]},${cols[4]},${cols[5]}`);
    }
  });
  return results;
}

const finalRows = ['Channel,Created at,Product,Issue,Sub Type,Handled'];

try {
  // Jan
  if (fs.existsSync(janPath)) {
    const janContent = fs.readFileSync(janPath, 'utf8');
    janContent.split('\n').forEach(line => {
      const formatted = formatJanToStandard(line.trim());
      if (formatted) finalRows.push(formatted);
    });
    console.log('Jan data processed: ' + finalRows.length + ' rows total.');
  }

  // Feb
  if (fs.existsSync(febPath)) {
    const febContent = fs.readFileSync(febPath, 'utf8');
    const febRows = processFebData(febContent);
    finalRows.push(...febRows);
    console.log('Feb data processed: ' + finalRows.length + ' rows total.');
  }

  // Mar
  if (fs.existsSync(marPath)) {
    const marContent = fs.readFileSync(marPath, 'utf8');
    const marRows = processMarData(marContent);
    finalRows.push(...marRows);
    console.log('Mar data processed: ' + finalRows.length + ' rows total.');
  }

  fs.writeFileSync(outputCsvPath, finalRows.join('\n'));
  console.log('Successfully generated WAGGLE_AI_FULL_DATA.csv at ' + outputCsvPath);
} catch (err) {
  console.error('Error processing data:', err);
}
