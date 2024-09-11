Build a Docker image:
```shell
docker build -t sentry-example .
```
Launch the container:
```shell
docker ru -p 80:80 sentry-example
```

Don't forget to replace YOUR_SENTRY_DSN with your real DSN, which you can find in your project settings in Sentry.

In the browser, open http://localhost

Click on Throw error
