#!/usr/bin/env bash

#
# We moved this to a small script wrapper, so that this compatible with Auto DevOps
#
echo "Linting files with eslint"
yarn run eslint --ext .js,.vue --ignore-path .gitignore .

echo "Linting files with prettier"
yarn run prettier --list-different --ignore-path .gitignore "**/*.{js,vue}"
