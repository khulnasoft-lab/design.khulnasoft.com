#!/usr/bin/env bash

#
# We moved this to a small script wrapper, so that this compatible with Auto DevOps
#
if [ "$NODE_ENV" == "test" ]; then
    echo "We are not running nuxt generate when $NODE_ENV is set to 'test'"
else
    echo "Generating production pages"
    NODE_ENV=production yarn run nuxt generate
fi
