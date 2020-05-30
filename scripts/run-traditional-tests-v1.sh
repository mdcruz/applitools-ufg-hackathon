#!/bin/bash

npm run clean:reports

export CYPRESS_CONFIG=TraditionalTestsV1/cypress.json
export CYPRESS_BROWSER=chrome
export REPORTS_DIR=Reports/TraditionalTestsV1

# Run test first on chrome
npm run test:traditional

export CYPRESS_BROWSER=firefox

# Run test next on firefox
npm run test:traditional

npm run merge:reports
npm run generate:html:report
