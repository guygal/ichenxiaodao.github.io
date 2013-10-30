#!/bin/bash

cd $(dirname "$0")
cd ..

java -cp bin/js.jar -Dfile.encoding=UTF-8 org.mozilla.javascript.tools.shell.Main -f bin/generate-nav.js
