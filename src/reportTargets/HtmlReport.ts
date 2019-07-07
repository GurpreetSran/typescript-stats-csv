import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string) {
    const html = `
        <div>
            <h1>Anaylysis Output<h1>
            <div>${report}</div>
        </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}
