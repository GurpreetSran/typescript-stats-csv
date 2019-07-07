import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResults } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    const wins = matches.filter(
      (match): boolean => {
        return (
          (match[1] === this.team && match[5] === MatchResults.HomeWin) ||
          (match[2] === this.team && match[5] === MatchResults.AwayWin)
        );
      }
    );
    return `${this.team} won ${wins.length} times`;
  }
}
