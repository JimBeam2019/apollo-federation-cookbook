FROM node:10

ARG NODE_ENV=test
ENV NODE_ENV=$NODE_ENV

WORKDIR /usr/src/apollo-federation-cookbook

COPY package.json yarn.lock ./

RUN set -ex; \
    if [ "$NODE_ENV" = "production" ]; then \
        yarn install --no-cache --frozen-lockfile --production; \
    elif [ "$NODE_ENV" = "test" ]; then \
        yarn install --no-cache --frozen-lockfile; \
    fi;

COPY . .

EXPOSE 4000
CMD [ "yarn", "start" ]