# syntax = docker/dockerfile:1
## ==============================================
FROM node:21-slim AS base
WORKDIR /app
# By copying only the package.json and package-lock.json here,
# we ensure that the following `-deps` steps are independent 
# of the source code. Therefore, the `-deps` steps will be 
# skipped if only the source code changes.
COPY package.json package-lock.json ./
## ==============================================


## ==============================================
FROM base AS build-deps
RUN npm install
## ==============================================


## ==============================================
FROM base AS prod-deps
RUN npm install --omit=dev
## ==============================================


## ==============================================
FROM build-deps AS build
COPY . .
ENV ASTRO_TELEMETRY_DISABLED=1
RUN npm run build
RUN npm run pagefind --site ./dist/client --output-subdir _pagefind
## ==============================================


## ==============================================
FROM node:21-alpine AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
## ==============================================


## ==============================================
ENV PORT=4321
ENV HOST=0.0.0.0
ENV ASTRO_TELEMETRY_DISABLED=1

EXPOSE 4321

CMD node ./dist/server/entry.mjs
## ==============================================
