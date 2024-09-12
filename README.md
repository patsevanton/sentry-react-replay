Change YOUR_SENTRY_DSN in src/App.js 

Build a Docker image:
```shell
docker build -t sentry-example .
```
Launch the container:
```shell
docker run -p 80:80 sentry-example
```

In the browser, open http://localhost

Click on Throw error
