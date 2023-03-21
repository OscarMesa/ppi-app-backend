FROM node:18.2.0-alpine as development

WORKDIR /app

RUN npm config set user 0 
RUN npm config set unsafe-perm true

COPY package.json ./

COPY . .

RUN yarn 

RUN yarn run build

FROM node:18.2.0-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json ./

COPY . .

RUN yarn install

COPY --from=development /app/dist ./dist

CMD ["node", "dist/main"]
