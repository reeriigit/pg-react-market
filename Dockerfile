FROM node:alpine3.16

WORKDIR /app

COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm","start"]

# docker exec -it [container_name] bash

