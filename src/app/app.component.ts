import { Component } from '@angular/core';

import nodeManifest from '../../package.json';

type LinkType = {
  title: string,
  url: string,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'nw-angular-example';

  versions = '' +
    'You are running NW.js (v' + window?.nw?.process?.versions?.nw + ' ' + window?.nw?.process?.versions['nw-flavor'] + '), ' +
    'Node.js (v' + window?.nw?.process?.versions?.node + '), ' +
    'Chromium (v' + window?.nw?.process?.versions?.chromium + '), ' +
    'and Angular (v' + nodeManifest.version + ').';

  public links: LinkType[];

  constructor() {
    this.links = [
      {
        title: 'Angular Tutorial',
        url: 'https://angular.io/tutorial'
      },
      {
        title: 'Angular CLI Documentation',
        url: 'https://angular.io/cli'
      },
      {
        title: 'NW.js Documentation',
        url: 'https://nwjs.io'
      }
    ];
  }

  test() {
    console.log('files', window.nw.require('fs').readdirSync('.').join(', '))
    const express = window.nw.require('express')
    const app = express()
    const port = 3000

    app.get('/', (req: any, res: any) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }

  // public open(event: Event, link: LinkType) {
  //   event.preventDefault();
  //   window.nw.Shell.openExternal(link.url);
  // }

  // public openDevTools(event: Event) {
  //   event.preventDefault();
  //   window.nw.Window.get().showDevTools();
  // }
}
