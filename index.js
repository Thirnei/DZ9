import * as Sentry from '@sentry/browser';

import { Integrations } from '@sentry/tracing';

Sentry.init({

  dsn: 'https://58a137d8221425afb2b8a98abb559e71@o4508365087965184.ingest.de.sentry.io/4508365106053200',

  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,

});
var x = 10;
if (a == 5) {
  console.log(b);
}
