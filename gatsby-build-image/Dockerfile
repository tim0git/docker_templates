FROM node:16.13.1-alpine

RUN  apk add vips-dev fftw-dev build-base python3 --update --no-cache \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/community/ \
    --repository https://alpine.global.ssl.fastly.net/alpine/edge/main

RUN npm install -g gatsby-cli