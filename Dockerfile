FROM node:8

WORKDIR /projects

COPY . .

RUN npm install
