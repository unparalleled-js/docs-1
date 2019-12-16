#!/usr/bin/env sh

# abort on errors
set -e

REPO=$(node -pe 'require("./package.json").repository')

# build
npm run build

# navigate into the build output directory
cd dist

# deploying to `docs.workato.com`
echo 'docs.workato.com' > CNAME

git init
git add -A
git commit -m 'Deploy'

git push -f git@github.com:"$REPO".git master:gh-pages

cd -
