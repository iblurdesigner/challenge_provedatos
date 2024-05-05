FROM node:20.12.2-alpine3.19
WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "node", "/server/index.js"]
