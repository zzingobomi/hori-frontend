FROM node:18.17.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 32000

CMD ["npm", "start:dev"]
