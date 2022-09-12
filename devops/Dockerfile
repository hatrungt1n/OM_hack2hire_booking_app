FROM asia.gcr.io/om-hkt21-team23/node:alpine3.16 as builder
ARG ENVIRONMENT=production
WORKDIR /app
COPY /package.json /yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM asia.gcr.io/om-hkt21-team23/node:alpine3.16
WORKDIR /app
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/dist dist
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/.env .env
CMD ["yarn", "preview"]
