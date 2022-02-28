FROM jenkins/ssh-agent:alpine

RUN apk -U upgrade

RUN apk add openrc

RUN apk add git

RUN apk add openjdk11

RUN apk add docker

RUN rc-update add docker boot

#run chmod 777 /var/run/docker.sock when container has started to make docker accessible