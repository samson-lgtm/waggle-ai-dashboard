import { TicketData } from '../types/ticket';
import Papa from 'papaparse';
import januaryCSV from '../../imports/customer-support-log.csv?raw';

export const loadJanuaryData = async (): Promise<TicketData[]> => {
  try {
    return new Promise((resolve, reject) => {
      Papa.parse(januaryCSV, {
        header: true,
        delimiter: '\t',
        skipEmptyLines: true,
        complete: (results) => {
          const formattedData: TicketData[] = results.data.map((row: any) => {
            // Map channel names
            let channel = row.Channel || '';
            if (channel === 'Scooby(Mobile)') channel = 'Inapp';
            else if (channel === 'Waggle Assist(Web)') channel = 'Webapp';
            
            // Convert date format from YYYY-MM-DD to DD-MM-YYYY
            const dateStr = row['Created at'] || '';
            if (dateStr) {
              const [year, month, day] = dateStr.split('-');
              const formattedDate = `${day}-${month}-${year}`;
              
              return {
                channel,
                createdAt: formattedDate,
                product: row.Product || '',
                issue: row.Issue || '',
                subType: row.Type || '',
                handled: row.Handled || ''
              };
            }
            return null;
          }).filter(item => item !== null) as TicketData[];
          
          resolve(formattedData);
        },
        error: (error) => {
          console.error('Error parsing CSV:', error);
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error loading January data:', error);
    return [];
  }
};