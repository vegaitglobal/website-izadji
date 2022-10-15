ARG LIBRARY=docker.io
ARG DOCKER_TAG=18-alpine
ARG PLATFORM=linux/x86_64
ARG PORT=3073
ARG NODE_ENV=development

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG} as build-step
ENV NODE_ENV=${NODE_ENV}
WORKDIR /app
COPY package.json /app
RUN npm install --omit=dev --quiet
COPY . /app
RUN npm run build

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG}
WORKDIR /app
COPY --from=build-step /app /app
ENV NODE_ENV=${NODE_ENV}
EXPOSE ${PORT}
CMD [ "yarn", "start" ]