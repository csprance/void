# ---------------------FRONTEND---------------------#
#           ██╗   ██╗ ██████╗ ██╗██████╗
#           ██║   ██║██╔═══██╗██║██╔══██╗
#           ██║   ██║██║   ██║██║██║  ██║
#           ╚██╗ ██╔╝██║   ██║██║██║  ██║
#            ╚████╔╝ ╚██████╔╝██║██████╔╝
#             ╚═══╝   ╚═════╝ ╚═╝╚═════╝
# ---------------------FRONTEND---------------------#
# Latest Node LTS
ARG NODE_VERSION=20.15.0
FROM node:${NODE_VERSION}-alpine as base

# Build Stage
FROM base as builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune @void/frontend --docker

# Installer Stage
FROM base AS installer
# Add lockfile and package.json's of isolated subworkspace
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install

# Copy the .env file from the root to server root so that the build system can pick it up at ../.env
COPY .env /

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN yarn turbo build --filter=@void/frontend...

# Runtime Stage
FROM base as runtime
WORKDIR /app

# Install needed linux programs
RUN apk add --no-cache curl

COPY --from=installer /app/apps/frontend/nuxt.config.ts .
COPY --from=installer /app/apps/frontend/package.json .
COPY --from=installer /app/apps/frontend/.output ./.output/
COPY --from=installer /app/apps/frontend/node_modules ./node_modules/

# Nuxt env vars
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV HOST=0.0.0.0

# Nuxt port
EXPOSE 3000

# HEALTHCHECK
HEALTHCHECK --interval=60s --timeout=15s \
  CMD curl --fail "http://127.0.0.1:$NUXT_PORT/api/healthcheckz" || exit 1

# Run the Nuxt App
ENTRYPOINT ["node", ".output/server/index.mjs"]
