import React from 'react';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { Replay } from '@sentry/replay';

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [
    new Replay(),
  ],
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
});

function ErrorButton() {
  function throwError() {
    throw new Error('This is a test error from React');
  }

  return (
    <button onClick={throwError}>
      Throw Error
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Sentry Example</h1>
      <ErrorButton />
    </div>
  );
}

export default Sentry.withProfiler(App);