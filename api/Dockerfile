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
WORKDIR /src

# add `/src/node_modules/.bin` to $PATH
ENV PATH /src/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent

# build application
RUN yarn run build

# copy app
COPY . ./

EXPOSE ${PORT}
CMD [ "yarn", "start" ]