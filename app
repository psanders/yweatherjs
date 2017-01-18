#!/usr/bin/env sh
main_js="$(pwd)/main.js"

for i in $(ls lib); do
    DEPS+="lib/$i:";
done;

jjs -cp $DEPS --language=es6 -fv -doe -ot -scripting=true "$main_js" -- "$@"