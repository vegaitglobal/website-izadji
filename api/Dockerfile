ARG LIBRARY=docker.io
ARG DOCKER_TAG=16.11
ARG PLATFORM=linux/x86_64
ARG PORT=1337
ARG NODE_ENV=production

# pull official base image
FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG}

# set node environment
ENV NODE_ENV=${NODE_ENV}

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# copy app
COPY . ./

# build application
RUN yarn run build

EXPOSE ${PORT}
CMD [ "yarn", "start" ]