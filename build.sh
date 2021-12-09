#!/bin/sh

npm run-script build && cp -rfv ./public/* ../ampache.github.io/api/

cp content/index.md ../ampache/docs/API.md
cp content/api-json-methods.md ../ampache/docs/API-JSON-methods.md
cp content/api-xml-methods.md ../ampache/docs/API-XML-methods.md
cp content/api-advanced-search.md ../ampache/docs/API-advanced-search.md
cp content/api-errors.md ../ampache/docs/API-Errors.md
cp content/api-acls.md ../ampache/docs/API-acls.md

