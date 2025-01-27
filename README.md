# Reproduction of an NestJS bug report:
## Fastify middleware doesn't execute on root path with `setGlobalPrefix` when using new wildcard syntax

https://github.com/nestjs/nest/issues/14520

### Background:

This is an empty application generated via `npx @nest/cli new` with the following changes:

* It uses a `FastifyAdapter`
* It uses a global prefix `app.useGlobalPrefix('api')`
* Two middlewares that log the current path are mounted:
  * `RootAMiddleware` is mounted using the old syntax `(.*)`
  * `RootBMiddleware` is mounted using the new syntax `{*path}`

### Steps to reproduce:

1) `pnpm install`
2) `pnpm start`
3) `curl http://localhost:300/api`
  * observe that only _Root A_ middleware was executed:
    ```
    LOG [Root A] triggered on /api
    ```
3) `curl http://localhost:300/api/xxx`
  * observe that both _Root A_ and _Root B_ middlewares were executed:
    ```
    LOG [Root A] triggered on /api/xxx
    LOG [Root B] triggered on /api/xxx
    ```

