#!/bin/bash

docker run --rm -i --security-opt seccomp=$(pwd)/chrome.json grafana/k6:latest-with-browser - <script.js
