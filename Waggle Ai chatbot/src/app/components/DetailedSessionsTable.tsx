import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ArrowUpDown } from 'lucide-react';
import { TicketData } from '../types/ticket';
import { formatDate, parseDate } from '../utils/dateUtils';

interface DetailedSessionsTableProps {
  data: TicketData[];
}

type SortField = 'createdAt' | 'channel' | 'product' | 'issue' | 'subType' | 'handled';
type SortDirection = 'asc' | 'desc';

export function DetailedSessionsTable({ data }: DetailedSessionsTableProps) {
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    let aVal: any = a[sortField];
    let bVal: any = b[sortField];

    // Handle date sorting
    if (sortField === 'createdAt') {
      aVal = parseDate(a.createdAt).getTime();
      bVal = parseDate(b.createdAt).getTime();
    } else {
      // String sorting
      aVal = (aVal || '').toLowerCase();
      bVal = (bVal || '').toLowerCase();
    }

    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
    <button
      onClick={() => handleSort(field)}
      className="flex items-center gap-1 hover:text-gray-900 font-medium"
    >
      {children}
      <ArrowUpDown className="w-4 h-4" />
    </button>
  );

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="max-h-[500px] overflow-y-auto">
        <Table>
          <TableHeader className="bg-gray-50 sticky top-0 z-10">
            <TableRow>
              <TableHead>
                <SortButton field="createdAt">Date</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="channel">Channel</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="product">Product</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="issue">Issue</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="subType">Sub Type</SortButton>
              </TableHead>
              <TableHead>
                <SortButton field="handled">Handled By</SortButton>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">
                  {formatDate(parseDate(ticket.createdAt))}
                </TableCell>
                <TableCell>{ticket.channel}</TableCell>
                <TableCell>{ticket.product || '-'}</TableCell>
                <TableCell>{ticket.issue || '-'}</TableCell>
                <TableCell>{ticket.subType || '-'}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.handled === 'Bot'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {ticket.handled}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
