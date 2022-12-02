FROM node:16 AS builder
ARG ga_id
ENV GOOGLE_ANALYTICS_ID=$ga_id
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run build

FROM alpine:3.17
RUN apk upgrade --no-cache && apk add --no-cache nginx nginx-mod-http-brotli
COPY nginx.conf /etc/nginx/http.d/default.conf
# Teach nginx to log to stderr and to _not_ run in daemon mode
RUN sed -i \
    -e '/^error_log/d' \
    -e '2i daemon off;' \
    -e '2i error_log stderr notice;' \
    /etc/nginx/nginx.conf
COPY --from=builder /app/public /usr/share/nginx/html

EXPOSE 5000

CMD ["nginx"]
