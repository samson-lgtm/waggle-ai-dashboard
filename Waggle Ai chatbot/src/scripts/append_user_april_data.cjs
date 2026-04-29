const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'app', 'data', 'WAGGLE_AI_FULL_DATA.csv');

const rawData = `2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp	4g Mini	Connection		Human
2026-04-20	Inapp	PM	DNR		Human
2026-04-20	Inapp	4g Mini	Registration Issue	Ownership Transfer	Human
2026-04-20	Inapp	4G Camera	Mounting Query		Human
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp				Bot
2026-04-20	Inapp	PM	Plan Mapping		Human
2026-04-20	Inapp	PM	DNR		Human
2026-04-20	Inapp	PM	Device Query	Bark Alert	Human
2026-04-20	Inapp	PM	Device Query	Battery Level Indicator	Human
2026-04-20	Inapp	RV Mini Cam	App Navigation	Motion Detection	Human
2026-04-20	Inapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp				Bot
2026-04-20	Webapp	4G Camera	Return and Refund		Human
2026-04-20	Webapp	4g Mini	Connection	SIM out of service	Human
2026-04-20	Webapp	PM	Subs Cancellation		Human
2026-04-20	Webapp				Bot
2026-04-20	Webapp	4g Mini	Not Turning On		Human
2026-04-20	Webapp	4g Mini	Subs Query		Human
2026-04-20	Webapp				Bot
2026-04-21	Inapp	4g Mini	Connection		Human
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp	PM	Temp Difference		Human
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp	PM	Subs Cancellation		Human
2026-04-21	Webapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Webapp	4g Mini	Two Way Audio issue		Human
2026-04-21	Inapp				Bot
2026-04-21	Webapp	4g Mini	Two Way Audio issue		Human
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp	RV Mini Cam	App Navigation	Flip Video	Human
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Webapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Inapp				Bot
2026-04-21	Webapp				Bot
2026-04-21	Inapp	PM	DNR		Human
2026-04-21	Webapp				Bot
2026-04-21	Webapp				Bot
2026-04-21	Webapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp	PM	PLPB	Query	Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp	PM	App Issue	Profle Update	Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp	4g Mini	Subs Activation	Flexi Plan query	Human
2026-04-22	Webapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Webapp	NA	Contact Support		Human
2026-04-22	Webapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp	PM	DNR		Human
2026-04-22	Inapp	RV Mini Cam	Set Up	Connection	Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp	4g Mini	App Navigation	Combo Plan	Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Webapp				Bot
2026-04-22	Inapp	Waggle Cam Pro	App Navigation	Alerts Related	Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Webapp	PM	DNR		Human
2026-04-22	Inapp	PM	DNR		Human
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp				Bot
2026-04-22	Inapp	RV Mini Cam	Conneciton		Human
2026-04-23	Inapp	PM	Subs Activation	Discount Request	Human
2026-04-23	Inapp	4g Mini	User Guide Request	Pan Related	Human
2026-04-23	Inapp	PM	DNR		Human
2026-04-23	Webapp				Bot
2026-04-23	Inapp	PM	Order	Charger	Human
2026-04-23	Inapp	PM	App Navigation	Change Billing Address	Human
2026-04-23	Webapp	PM	DNR		Human
2026-04-23	Webapp				Bot
2026-04-23	Webapp	4g Mini	Presales	Price Inquiry	Human
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp	4g Mini	App Issue	Cam not showing	Human
2026-04-23	Webapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp	PM	Subs Cancellation		Human
2026-04-23	Webapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Webapp				Bot
2026-04-23	Inapp	4g Mini	Trial Plan Query		Human
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Webapp				Bot
2026-04-23	Inapp	PM	Subs Activation	Combo Plan	Human
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Webapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Webapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp	4g Mini	Device Removal		Human
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-23	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp	NA	Contact Support	NA	Human
2026-04-24	Webapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Webapp	PM	Presales	Subs Inquiry	Human
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp	4g Mini	Streaming	Other device	Human
2026-04-24	Webapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Webapp	PM	Order	Canada Order	Human
2026-04-24	Inapp	PM	DNR		Human
2026-04-24	Inapp	PM	Subs Cancellation	Further Steps	Human
2026-04-24	Webapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp	PM	DNR		Human
2026-04-24	Webapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp				Bot
2026-04-24	Inapp	PM	DNR		Human
2026-04-24	Inapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Webapp				Bot
2026-04-24	Inapp	PM	Spanish Language	Warranty Query	Human
2026-04-24	Inapp				Bot
2026-04-24	Inapp	RV Mini Cam	Connection		Human
2026-04-25	Inapp				Bot
2026-04-25	Webapp	PM	Subs Activation	Query	Human
2026-04-25	Webapp	PM	PLPB	Query	Human
2026-04-25	Inapp				Bot
2026-04-25	Webapp	PM	Presales	Cellular Network	Human
2026-04-25	Webapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Webapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Inapp	PM	Warranty	Unable to claim	Human
2026-04-25	Webapp	PM	Warranty	Unable to claim	Human
2026-04-25	Webapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Webapp	4g Mini	Device Query	Functionalities	Human
2026-04-25	Webapp				Bot
2026-04-25	Webapp	4g Mini	Subs Activation	Combo Plan	Human
2026-04-25	Inapp				Bot
2026-04-25	Webapp	PM	DNR		Human
2026-04-25	Inapp				Bot
2026-04-25	Inapp	PM	DNR		Human
2026-04-25	Inapp				Bot
2026-04-25	Inapp	PM	DNR		Human
2026-04-25	Inapp				Bot
2026-04-25	Inapp	PM	DNR		Human
2026-04-25	Inapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Inapp	PM	DNR		Human
2026-04-25	Webapp				Bot
2026-04-25	Inapp	PM	Warranty	Unable to claim	Human
2026-04-25	Inapp	RV Mini Cam	Registration Issue	Unable to register	Human
2026-04-25	Inapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Webapp				Bot
2026-04-25	Inapp	4g Mini	App Navigation	Delete Recording	Human
2026-04-25	Inapp				Bot
2026-04-25	Webapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Inapp				Bot
2026-04-25	Webapp				Bot
2026-04-25	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp	PM	Warranty	Unable to claim	Human
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp	4g Mini	Charging Query		Human
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Inapp	PM	Warranty	Unable to claim	Human
2026-04-26	Inapp				Bot
2026-04-26	Inapp	PM	Warranty	Unable to claim	Human
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Inapp	PM	DNR		Human
2026-04-26	Inapp				Bot
2026-04-26	Webapp				Bot
2026-04-26	Webapp	PM	Warranty	Unable to claim	Human
2026-04-26	Webapp	4g Mini	Subs Activation	Discount Request	Human
2026-04-26	Inapp	PM	DNR		Human
2026-04-26	Inapp				Bot
2026-04-26	Inapp				Bot
2026-04-26	Webapp	4g Mini	Return and Refund	Outside Window	Human
2026-04-26	Webapp				Bot
2026-04-26	Webapp				Bot`;

const lines = rawData.trim().split('\n');

let newCsvContent = '';

for (const line of lines) {
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

console.log(`Successfully generated and appended ${lines.length} data rows to WAGGLE_AI_FULL_DATA.csv`);
