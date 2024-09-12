import React from 'react';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
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