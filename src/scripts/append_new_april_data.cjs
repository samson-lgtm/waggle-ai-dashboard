const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');
const rawFilePath = path.join(__dirname, 'raw_april_data.tsv');

const rawData = fs.readFileSync(rawFilePath, 'utf8');
const lines = rawData.trim().split('\n');

let newCsvContent = '';

for (const line of lines) {
  if (line.includes('Here is the aprilmonth data') || line.includes('Date\tChannel\tProduct')) {
    continue; // Skip header
  }
  const columns = line.split('\t');
  if (columns.length === 6) {
    const date = columns[0].trim();
    const channel = columns[1].trim();
    const product = columns[2].trim();
    const issue = columns[3].trim();
    const subType = columns[4].trim();
    const handled = columns[5].trim();

    // WAGGLE_AI_FULL_DATA.csv columns: Channel,Created at,Product,Issue,Sub Type,Handled
    newCsvContent += `\n${channel},${date},${product},${issue},${subType},${handled}`;
  } else {
    console.error('Invalid row format:', line);
  }
}

fs.appendFileSync(csvFilePath, newCsvContent, 'utf8');

console.log(`Successfully parsed and appended data to WAGGLE_AI_FULL_DATA.csv`);
