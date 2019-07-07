import CsvFileReader from './CsvFileReader';
import { MatchResults } from './MatchResults';
import MatchReader from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

const result = matchReader.matches.filter(
  (match): boolean => {
    return (
      (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
      (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
    );
  }
);

console.log('Man United Wins : ', result.length);
