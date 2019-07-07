import { dateStringTodate } from './utils';
import { MatchResults } from './MatchResults';

type MatchData = [Date, string, string, number, number, MatchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

class MatchReader {
  reader: DataReader;
  matches: MatchData[] = [];

  constructor(reader: DataReader) {
    this.reader = reader;
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
}

export default MatchReader;
