const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');

async function processFile() {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  let totalSessions = 0;
  let botHandled = 0;
  let humanHandled = 0;
  
  const monthlyVolume = { '01': 0, '02': 0, '03': 0, '04': 0 };
  const channelVolume = {};
  const productVolume = {};
  const issueVolume = {};

  let isFirst = true;

  for await (const line of rl) {
    if (isFirst) {
      isFirst = false;
      continue;
    }
    
    const row = line.split(',');
    if (row.length < 6) continue;
    
    const channel = row[0] || 'Unknown';
    const createdAt = row[1] || '';
    const product = row[2] || 'Unknown';
    const issue = row[3] || 'Unknown';
    const handled = row[5] || 'Unknown';

    totalSessions++;
    
    if (handled.toLowerCase() === 'bot') botHandled++;
    else if (handled.toLowerCase() === 'human') humanHandled++;

    const dateMatch1 = createdAt.match(/^(\d{4})[-\/](\d{1,2})[-\/](\d{1,2})/); // YYYY-MM-DD
    const dateMatch2 = createdAt.match(/^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})/); // DD-MM-YYYY

    let monthStr = null;
    if (dateMatch1) monthStr = dateMatch1[2].padStart(2, '0');
    else if (dateMatch2) monthStr = dateMatch2[2].padStart(2, '0');

    if (monthStr && monthlyVolume[monthStr] !== undefined) {
      monthlyVolume[monthStr]++;
    }

    // Product mapping to unify "4G Mini" and "4g Mini"
    let p = product;
    if (p.toLowerCase() === '4g mini') p = '4G Mini';
    if (p.toLowerCase() === 'pm') p = 'Pet Monitor (PM)';
    if (p.toLowerCase() === 'rv mini cam') p = 'RV Mini Cam';

    channelVolume[channel] = (channelVolume[channel] || 0) + 1;

    if (p && p !== 'Unknown' && p !== '') {
      productVolume[p] = (productVolume[p] || 0) + 1;
    }
    
    if (issue && issue !== 'Unknown' && issue !== 'NA' && issue !== '') {
      issueVolume[issue] = (issueVolume[issue] || 0) + 1;
    }
  }

  console.log('--- WAGGLE AI PERFORMANCE SUMMARY ---');
  console.log(`Total Sessions (Jan-Apr): ${totalSessions}`);
  console.log(`Bot Handled: ${botHandled} (${((botHandled / totalSessions) * 100).toFixed(1)}%)`);
  console.log(`Human Handled: ${humanHandled} (${((humanHandled / totalSessions) * 100).toFixed(1)}%)`);
  console.log('\nMonthly Breakdown:');
  console.log(`January: ${monthlyVolume['01']} sessions`);
  console.log(`February: ${monthlyVolume['02']} sessions`);
  console.log(`March: ${monthlyVolume['03']} sessions`);
  console.log(`April: ${monthlyVolume['04']} sessions`);
  
  console.log('\nChannels:');
  Object.entries(channelVolume).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`${k}: ${v} (${((v/totalSessions)*100).toFixed(1)}%)`));

  console.log('\nTop 5 Products with Human escalation:');
  Object.entries(productVolume).sort((a,b) => b[1]-a[1]).slice(0, 5).forEach(([k,v]) => console.log(`${k}: ${v} escalations`));

  console.log('\nTop 5 Inquiries Escalated:');
  Object.entries(issueVolume).sort((a,b) => b[1]-a[1]).slice(0, 5).forEach(([k,v]) => console.log(`${k}: ${v} escalations`));
}

processFile();
