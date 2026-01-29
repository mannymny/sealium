# Sealium

Nx monorepo for Sealium. It includes the web app, API, and shared libraries.

## Projects

- `@sealium/web` - Web app (React)
- `@sealium/api` - Node API
- `@sealium/web-e2e` - End-to-end tests (Playwright)
- `@sealium/shared`, `@sealium/proof`, `@sealium/transcription`, `@sealium/files` - Libraries

## Requirements

- Node.js and npm (or pnpm/yarn)

## Quick start

```sh
npm install
npx nx show projects
```

To see the targets available for a project:

```sh
npx nx show project @sealium/api
```

## Common commands

```sh
# API
npx nx run @sealium/api:serve
npx nx run @sealium/api:build

# Web
npx nx run @sealium/web:serve
npx nx run @sealium/web:build

# E2E
npx nx run @sealium/web-e2e:e2e

# Workspace graph
npx nx graph
```

If a target does not exist, check with `npx nx show project <project>`.
