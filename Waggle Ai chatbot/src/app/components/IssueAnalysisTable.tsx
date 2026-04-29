import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { IssueAnalysis } from '../types/ticket';

interface IssueAnalysisTableProps {
  data: IssueAnalysis[];
}

export function IssueAnalysisTable({ data }: IssueAnalysisTableProps) {
  const [expandedIssues, setExpandedIssues] = useState<Set<string>>(new Set());

  const toggleIssue = (issue: string) => {
    const newExpanded = new Set(expandedIssues);
    if (newExpanded.has(issue)) {
      newExpanded.delete(issue);
    } else {
      newExpanded.add(issue);
    }
    setExpandedIssues(newExpanded);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="max-h-[500px] overflow-y-auto">
        <Table>
          <TableHeader className="bg-gray-50 sticky top-0 z-10">
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Issue Type</TableHead>
              <TableHead className="text-right">Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.flatMap((issue, issueIndex) => {
              const isExpanded = expandedIssues.has(issue.issue);
              const rows = [
                // Main Issue Row
                <TableRow 
                  key={`${issue.issue}-${issueIndex}`}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleIssue(issue.issue)}
                >
                  <TableCell>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{issue.issue}</TableCell>
                  <TableCell className="text-right font-semibold">{issue.count}</TableCell>
                </TableRow>
              ];

              // Add sub-issue rows if expanded
              if (isExpanded) {
                issue.subIssues.forEach((subIssue, subIndex) => {
                  rows.push(
                    <TableRow key={`${issue.issue}-${subIssue.subType}-${subIndex}`} className="bg-blue-50">
                      <TableCell></TableCell>
                      <TableCell className="pl-8">
                        <div>
                          <div className="font-medium text-sm text-gray-900">{subIssue.subType}</div>
                          <div className="text-xs text-gray-600 mt-1.5 flex flex-wrap gap-1.5">
                            {subIssue.products.map((p, pIndex) => (
                              <span 
                                key={`${issue.issue}-${subIssue.subType}-${p.product}-${pIndex}`}
                                className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-gray-300 text-gray-700"
                              >
                                {p.product} <span className="ml-1 font-semibold">({p.count})</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{subIssue.count}</TableCell>
                    </TableRow>
                  );
                });
              }

              return rows;
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}