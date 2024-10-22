# ----------------------BACKEND---------------------#
#           ██╗   ██╗ ██████╗ ██╗██████╗
#           ██║   ██║██╔═══██╗██║██╔══██╗
#           ██║   ██║██║   ██║██║██║  ██║
#           ╚██╗ ██╔╝██║   ██║██║██║  ██║
#            ╚████╔╝ ╚██████╔╝██║██████╔╝
#             ╚═══╝   ╚═════╝ ╚═╝╚═════╝
# ---------------------BACKEND----------------------#
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
RUN turbo prune @void/backend --docker

# Installer Stage
FROM base AS installer
# Add lockfile and package.json's of isolated subworkspace
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN yarn install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN yarn turbo build --filter=@void/backend...

# Runtime Stage
FROM base as runtime
WORKDIR /app

#  Update and APK Add Machine Runtime Deps
RUN apk update && apk add --no-cache \
    # ffmpeg (For metadata extraction)
     ffmpeg \
    # curl (for healthcheck)
     curl

# Copy runtime essentials
COPY --from=installer /app .

# Copy Emails from Frontend to /app/emails
COPY ./apps/frontend/emails ./emails

# Expose Ports
EXPOSE 1337
ENV PORT 1337

HEALTHCHECK --interval=60s --timeout=15s \
CMD curl --fail "http://127.0.0.1:$PORT/healthcheckz" || exit 1

CMD node apps/backend/dist/src/index.js
