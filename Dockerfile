FROM registry.gitlab.com/gitlab-org/gitlab-services/design.gitlab.com/leipert-pipeline-performance:latest as cache

FROM node:16 AS builder
ARG ga_id
ENV GOOGLE_ANALYTICS_ID=$ga_id
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY --from=cache /cache_nux[t] /app/node_modules/.cache/nuxt
COPY . .
RUN yarn run build

FROM nginx:stable-alpine
RUN apk upgrade --no-cache
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/public /usr/share/nginx/html
COPY --from=builder /app/node_modules/.cache/nuxt /cache_nuxt
