#!/usr/bin/env bash
# Use the unofficial bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail; IFS=$'\n\t'

#
# We moved this to a small script wrapper, so that this is compatible with Auto DevOps
#

echo "TIP: if you execute \`yarn run lint:fix\`, you can fix most linting errors"

echo "Linting files with eslint"
yarn run eslint

echo "Linting files with prettier"
yarn run prettier

echo "Ensuring that markdown files end with an empty line"
yarn run markdown-lint