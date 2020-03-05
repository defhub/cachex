#!/bin/bash
set -e

echo -e "⛏  [build] starting build.. \n"

rm -rf dist
tsc

echo -e "⛏  [build] starting bundling.. \n"

ncc build src/index.ts -o dist