import fs from 'fs';
import { MatchResults } from './MatchResults';

import { dateStringTodate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResults, string];

export default function(fileName: string): MatchData {
  return fs
    .readFileSync(fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => row.split(','))
    .map(
      (row: string[]): MatchData => {
        return [
          dateStringTodate(row[0]),
          row[1],
          row[2],
          parseInt(row[3], 10),
          parseInt(row[4], 10),
          row[5] as MatchResults,
          row[6]
        ];
      }
    );
}

// Might need to convert this to class -
