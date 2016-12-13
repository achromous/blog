FROM nginx:latest

RUN apt-get update && apt-get install -y \
 curl

RUN cd ~
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -

RUN apt-get update && apt-get install -y \
 build-essential \
 nodejs

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN npm install

COPY default.conf /etc/nginx/conf.d/default.conf

COPY . /usr/src

EXPOSE 3000 80
