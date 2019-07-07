import { MatchData } from './MatchData';
import { WinsAnalysis } from './analysers/WinsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  analyser: Analyzer;
  outputTarger: OutputTarget;

  constructor(analyser: Analyzer, outputTarger: OutputTarget) {
    this.analyser = analyser;
    this.outputTarger = outputTarger;
  }

  static winsAnalysisAndHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(mathes: MatchData[]): void {
    const output = this.analyser.run(mathes);
    this.outputTarger.print(output);
  }
}
