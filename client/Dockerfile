FROM node:20-alpine

WORKDIR /client

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

EXPOSE 4173

CMD [ "npm", "run", "preview" ]
