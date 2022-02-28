FROM <read through cache>/docker:20.10.11-alpine3.14

LABEL digital-devops-docker-dive="v1.0.1"

RUN apk -U upgrade

RUN apk add dpkg

RUN dpkg --add-architecture amd64

RUN wget https://github.com/wagoodman/dive/releases/download/v0.9.2/dive_0.9.2_linux_amd64.deb

RUN dpkg -i ./dive_0.9.2_linux_amd64.deb

#RUN addgroup -S docker && adduser -S appuser -G docker
#
#USER appuser
