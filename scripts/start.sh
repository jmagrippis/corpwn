#!/usr/bin/env bash

./node_modules/.bin/graphql-faker &

cd web
yarn start &
