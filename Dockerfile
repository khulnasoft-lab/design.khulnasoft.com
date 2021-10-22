FROM node:14 AS builder
ARG GOOGLE_ANALYTICS_ID
ENV GOOGLE_ANALYTICS_ID=$GOOGLE_ANALYTICS_ID
RUN echo "HEY WORLD"
RUN env
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
RUN apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html
