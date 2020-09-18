FROM node:12.18.2-alpine

WORKDIR /usr/src/app
COPY package.json app.js /usr/src/app/

LABEL license MIT
ENV NODE_ENV production

EXPOSE 3000/tcp

RUN npm update

CMD ["node", "app.js"]
