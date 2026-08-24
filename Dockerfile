FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --config.minimum-release-age=0
COPY . .
ENV NITRO_PRESET=node-server
RUN pnpm build

FROM node:22-alpine
WORKDIR /app
ENV HOST=0.0.0.0 PORT=3000
COPY --from=build /app/.output ./.output
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
