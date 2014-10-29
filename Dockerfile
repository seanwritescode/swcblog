# DOCKER-VERSION 1.3
# Development Only

FROM ubuntu:14.04
MAINTAINER Sean Lindo <sean.lindo@runbox.com>

# make sure apt is up to date
RUN apt-get update

# install dependencies we need to run a nodejs app
RUN apt-get install -y nodejs npm git git-core

ADD . /src/

RUN cd /src/; npm install
