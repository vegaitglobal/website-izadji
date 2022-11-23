ARG LIBRARY=docker.io
ARG DOCKER_TAG=18.2
ARG PLATFORM=linux/x86_64
ARG PORT=3002
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
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@5.0.1 -g --silent

# copy app
COPY . ./

# start the app on exposed port
EXPOSE ${PORT}
CMD [ "npm", "start" ]
