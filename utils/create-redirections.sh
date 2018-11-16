#!/bin/bash
# Generates HTML files which redirect to dynamic routes so we can link to them without # in the URL

set -o errexit
set -o nounset

basedir=$(cd "$(dirname $0)/.."; pwd)

cd "${basedir}/contents"
for file in $(find components -name '*.md')
do
  echo "Creating redirection for ${file} ..."
  url="$(dirname ${file})/$(basename -s .md ${file})"
  mkdir -p "${basedir}/public/${url}"
  echo "<meta http-equiv=\"refresh\" content=\"0;url=/#/${url}\">Redirecting to /#/${url} ..." > "${basedir}/public/${url}/index.html"
done
