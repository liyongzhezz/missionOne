#!/usr/bin/env bash

set -e

npm run docs:build
cp home.jpeg docs/.vuepress/dist
# cp images/* docs/.vuepress/dist/assets/img/

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:liyongzhezz/missionOne.git master:source_code


cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:liyongzhezz/missionOne.git master:gh-pages
cd -

