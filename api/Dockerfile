FROM node:20-alpine

RUN apk add --no-cache bash

WORKDIR /server

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
