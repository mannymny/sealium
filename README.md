# Sealium

Monorepo Nx para Sealium. Incluye app web, API y librerias compartidas.

## Proyectos

- `@sealium/web` - app web (React)
- `@sealium/api` - API Node
- `@sealium/web-e2e` - pruebas e2e (Playwright)
- `@sealium/shared`, `@sealium/proof`, `@sealium/transcription`, `@sealium/files` - librerias

## Requisitos

- Node.js y npm (o pnpm/yarn)

## Inicio rapido

```sh
npm install
npx nx show projects
```

Para ver los targets disponibles de un proyecto:

```sh
npx nx show project @sealium/api
```

## Comandos comunes

```sh
# API
npx nx run @sealium/api:serve
npx nx run @sealium/api:build

# Web
npx nx run @sealium/web:serve
npx nx run @sealium/web:build

# E2E
npx nx run @sealium/web-e2e:e2e

# Grafo del workspace
npx nx graph
```

Si algun target no existe, revisa con `npx nx show project <project>`.
