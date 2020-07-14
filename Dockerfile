FROM node AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ARG TITLE="datacat Explorer"
ARG API=/graphql
ARG MAIL

ENV REACT_APP_TITLE=${TITLE}
ENV REACT_APP_API=${API}
ENV REACT_APP_MAIL=${MAIL}

COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm run-script build

FROM nginx:stable-alpine

COPY --from=build /app/build/ /var/www
COPY nginx.conf /etc/nginx/templates/default.conf.template
