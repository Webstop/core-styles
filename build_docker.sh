#!/usr/bin/env bash

# Make sure that you are logged in first:
#
#   $ docker login
#   Username: danlynn
#   Password: ******
#   Login Succeeded

docker build -t webstop/jekyll:latest .

docker push webstop/jekyll
