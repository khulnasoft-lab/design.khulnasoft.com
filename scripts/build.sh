#!/usr/bin/env bash

#
# We moved this to a small script wrapper, so that this compatible with Auto DevOps
#
if [ "$NODE_ENV" == "test" ]; then
    echo "We are not running nuxt generate when $NODE_ENV is set to 'test'"
else
    echo "Generating production pages"
    # We need to pipe into a file, so that nuxt properly outputs in CI
    NODE_ENV=production yarn run nuxt generate &> output.log
    cat output.log
    rm output.log
    # Sometimes the error code doesn't get propagated properly,
    # so we test that `public/index.html` as a file exists
    if test -f "public/index.html"; then
      echo "Public folder exists, all good"
    else
      echo "Public folder does not exist, build failed"
      exit 1
    fi
fi
