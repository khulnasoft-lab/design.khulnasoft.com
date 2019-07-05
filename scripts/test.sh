#!/usr/bin/env bash
# Use the unofficial bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail; IFS=$'\n\t'

#
# We moved this to a small script wrapper, so that this is compatible with Auto DevOps
#

echo "Linting files with eslint"
yarn run eslint --ext .js,.vue --ignore-path .gitignore .

echo "Linting files with prettier"
yarn run prettier --list-different --ignore-path .gitignore "**/*.{js,vue}"
