import 'reflect-metadata';

// There's an issue with how zone.js compiles and publishes it's embedded typing defn (doesn't declare any exports)
// This is a workaround pending zone.js fixing the issue.
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component.ts'

import { UpgradeAdapter } from '@angular/upgrade';
const upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.body, ['ngApp'], { strictDi: true });

bootstrap(AppComponent);