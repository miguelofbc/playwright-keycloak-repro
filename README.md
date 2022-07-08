Repro for https://github.com/microsoft/playwright/issues/15498: Re-Use KeyCloak
=====================


To run, clone the repo, then:

```
$ npm i
$ npx playwright test
```

Observe:

```
Running 3 tests using 3 workers

  ✓  [webkit] › tests/example.spec.ts:3:1 › should already be logged in and can click on tokens (11s)
  ✓  [firefox] › tests/example.spec.ts:3:1 › should already be logged in and can click on tokens (12s)
  ✓  [chromium] › tests/example.spec.ts:3:1 › should already be logged in and can click on tokens (11s)
```