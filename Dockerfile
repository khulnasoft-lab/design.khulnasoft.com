ARG GOOGLE_ANALYTICS_ID
FROM node:14 AS builder
ENV GOOGLE_ANALYTICS_ID=$GOOGLE_ANALYTICS_ID
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
RUN apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html
