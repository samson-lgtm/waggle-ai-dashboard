const fs = require('fs');

const lines = fs.readFileSync('c:/Users/Samson-CD/Desktop/src/app/data/WAGGLE_AI_FULL_DATA.csv', 'utf8').split('\n');

let jan = 0, feb = 0, mar = 0, other = 0;
lines.forEach(l => {
  if (l.includes('-01-2') || l.includes('2026-01')) jan++;
  else if (l.includes('-02-2') || l.includes('2026-02')) feb++;
  else if (l.includes('-03-2') || l.includes('2026-03')) mar++;
  else if (l.trim()) other++;
});

console.log(`Jan: ${jan}, Feb: ${feb}, Mar: ${mar}, Other: ${other}`);
