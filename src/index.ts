import csvReader from './csvReader';
import { MatchResults } from './MatchResults';

const matches = csvReader('football.csv');

console.log(matches);

const result = matches.filter((match: MatchResults) => {
  return (
    (match[1] === 'Man United' && match[5] === MatchResults.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResults.AwayWin)
  );
});

console.log('Man United Wins : ', result.length);
