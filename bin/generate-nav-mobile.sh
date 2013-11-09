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
        p=$(sed -e 's/weixin-course/微信公众平台开发/g' \
                -e 's/iOS-Dev/iOS学习记录/g' \
                -e 's/software-lift/软件人生/g' \
                -e 's/version-control/版本控制/g'  \
                -e 's/life-is-like-a-play/人生如戏/g'  \
                -e 's/stanford-iOS-2013/斯坦福大学的iOS开发课程笔记(2013)/g'  \
                -e 's/practical/实用备忘/g' <<< "$p")
        echo "<dt>${p}</dt>"

        find $d -maxdepth 1 -type f -name '*.html' | while read f; do
            title=$(sed -e 's/^<div title="//' -e 's/".*//' -e '1q' "$f")
            echo "<dd><a href=\"mobile.html?p=${f}\" target=\"_blank\">${title}</a></dd>"
        done
    fi
done
echo '</dl>'
