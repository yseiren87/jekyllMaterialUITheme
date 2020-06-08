#!/bin/bash


case $1 in
jekyll)
    bundle exec jekyll clean
    bundle exec jekyll serve --host 192.168.110.10
    ;;

dev)
    npm start
    ;;

build)
    npm run build
    ;;

*)
    echo "jekyll : jekyll serve"
    echo "dev    : npm start"
    echo "build  : npm build"
    ;;
esac