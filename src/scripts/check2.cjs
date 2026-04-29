const fs = require('fs');
const marPath = 'c:/Users/Samson-CD/Desktop/src/app/utils/loadMarchData.ts';
const content = fs.readFileSync(marPath, 'utf8');

const startPattern = 'const marchCSV = `';
const startIdx = content.indexOf(startPattern);
const startData = startIdx + startPattern.length;
const endIdx = content.indexOf('`;', startData);
const csvPart = content.substring(startData, endIdx);

const lines = csvPart.split('\n');
let dropped = [];
lines.forEach(line => {
  if (!line || line.trim().startsWith('Channel')) return;
  const cols = line.split('\t');
  if (cols.length < 6) dropped.push(Array.from(cols).map((c, i) => `${i}:${c}`).join(' | ') + ` [len: ${cols.length}]`);
});

console.log('Sample of dropped:');
console.log(dropped.slice(0, 10).join('\n'));
