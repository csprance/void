# ----------------------DOCS---------------------#
#           ██╗   ██╗ ██████╗ ██╗██████╗
#           ██║   ██║██╔═══██╗██║██╔══██╗
#           ██║   ██║██║   ██║██║██║  ██║
#           ╚██╗ ██╔╝██║   ██║██║██║  ██║
#            ╚████╔╝ ╚██████╔╝██║██████╔╝
#             ╚═══╝   ╚═════╝ ╚═╝╚═════╝
# ---------------------DOCS----------------------#
# Latest Node LTS
ARG NODE_VERSION=20.15.0
FROM node:${NODE_VERSION}-alpine as base

FROM base as builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune @void/docs --docker

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

RUN yarn turbo build --filter=@void/docs...

# Runtime Stage
# Use the official Nginx image as the base image for the serve stage
FROM nginx:alpine as runtime

# Copy the built files from the installer stage
COPY --from=installer /app/apps/docs/content/.vitepress/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
