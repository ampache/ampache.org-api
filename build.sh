#!/bin/sh

npm run build && cp -rfv ./build/* ../ampache.github.io/api/

cp docs/index.md ../../ampache-develop/docs/API.md
cp docs/api-json-methods.md ../../ampache-develop/docs/API-JSON-methods.md
cp docs/api-xml-methods.md ../../ampache-develop/docs/API-XML-methods.md
cp docs/api-advanced-search.md ../../ampache-develop//docs/API-advanced-search.md
cp docs/api-errors.md ../../ampache-develop/docs/API-Errors.md
cp docs/api-acls.md ../../ampache-develop/docs/API-acls.md

