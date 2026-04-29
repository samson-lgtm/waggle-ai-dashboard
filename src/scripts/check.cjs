const fs = require('fs');
const marPath = 'c:/Users/Samson-CD/Desktop/src/app/utils/loadMarchData.ts';
const content = fs.readFileSync(marPath, 'utf8');

const startPattern = 'const marchCSV = `';
const startIdx = content.indexOf(startPattern);
const startData = startIdx + startPattern.length;
const endIdx = content.indexOf('`;', startData);
const csvPart = content.substring(startData, endIdx);

const lines = csvPart.split('\n');
let c6 = 0, clt6 = 0;
lines.forEach(line => {
  if (!line || line.trim().startsWith('Channel')) return;
  const cols = line.split('\t');
  if (cols.length >= 6) c6++;
  else {
    clt6++;
  }
});

console.log('Total >= 6:', c6, '| Total < 6:', clt6);
