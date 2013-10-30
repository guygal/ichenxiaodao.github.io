#!/bin/bash

cd $(dirname "$0")
cd ..

echo '<dl class="navigator">'
find data -type d | while read d; do
    count=$(find $d -maxdepth 1 -type f -name '*.html' | wc -l)
    if [ $count -gt 0 ]; then
        p=${d#data}
        if [ -z $p ]; then
            p=/
        fi
        p=$(sed -e 's/weixin-course/微信公众平台开发教程/g' \
                -e 's/happy-life/幸福生活/g' <<< "$p")
        echo "<dt>${p}</dt>"

        find $d -maxdepth 1 -type f -name '*.html' | while read f; do
            title=$(sed -e 's/^<div title="//' -e 's/".*//' -e '1q' "$f")
            echo "<dd><a href=\"mobile.html?p=${f}\" target=\"_blank\">${title}</a></dd>"
        done
    fi
done
echo '</dl>'
