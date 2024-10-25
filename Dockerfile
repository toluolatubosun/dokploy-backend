FROM node:18.0.0-alpine3.15

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn config set unsafe-perm true

RUN yarn install --frozen-lockfile --no-cache --production=true

COPY --chown=node:node . .

ENV NODE_ENV=production

RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]