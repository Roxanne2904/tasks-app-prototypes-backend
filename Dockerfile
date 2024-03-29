FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon --save-dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
