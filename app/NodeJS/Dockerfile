FROM ubuntu:16.04
WORKDIR /root
RUN apt-get update && apt-get -y install build-essential curl
RUN curl -sL https://deb.nodesource.com/setup_7.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y iputils-ping
RUN npm install mongodb
ADD app.js /root
CMD ["/usr/bin/node", "/root/app.js"]
EXPOSE 3000