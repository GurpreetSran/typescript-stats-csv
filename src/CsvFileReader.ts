import fs from 'fs';

class CsvFileReader {
  private fileName: string;
  public data: string[][];

  constructor(fileName: string) {
    this.fileName = fileName;
    this.data = [];
  }

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}

export default CsvFileReader;
