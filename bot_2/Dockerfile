FROM node:20-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start:prod"]
