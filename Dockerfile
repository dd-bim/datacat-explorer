FROM node AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
COPY public ./public
RUN npm run-script build

FROM nginx:stable-alpine

COPY --from=build /app/build/ /var/www
COPY nginx.conf /etc/nginx/templates/default.conf.template
