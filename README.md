# NxTemplate

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Development server

Run `nx serve nx-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you
change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

# Reminder

## Create an NX workspace

Run `npx create-nx-workspace@latest <workspace name>`

Select the following options:

- integrated
- angular-monorepo
- `<app name>`
- scss
- No

## Update the nx generators

In nx.json, add the following lines:

```json
{
  ...
  "generators": {
    "@nrwl/angular:application": {
      ...
      "standalone": true,
      "routing": true
    },
    "@nrwl/angular:library": {
      ...
      "buildable": true,
      "publishable": true,
      "changeDetection": "OnPush",
      "importPath": "nx-lib-import-path",
      "standalone": true
    },
    "@nrwl/angular:component": {
      ...
      "standalone": true,
      "changeDetection": "OnPush"
    },
    "@nrwl/angular:ngrx": {
      "root": false,
      "directory": "data-access",
      "facade": true,
      "route": ""
    }
  }
}
```

## Create a new app

Run `nx g app nx-app`

## Create a new lib

Run `nx g lib nx-lib --importPath=<path to publishable library>`

## Create a component for an app

Run `nx g c <component name> --path=apps/<app name>/src/app/<path to component> --project=<app name>`

## Create a component for a lib

Run `nx g c <component name> --export --path=libs/<lib name>/src/lib/<path to component> --project=<lib name>`

## Add NgRx to an app

Run `nx g ngrx origin --parent=apps/<app name>/src/main.ts --root --facade=false`

## Add an NgRx feature to an app

Run `nx g ngrx <ngrx feature name> --facade=true --root=false --parent=apps/<app name>/src/app/<path to 'xxx.routes.ts'> --route=<route 'path'> --directory=<final directory name>`

[//]: # 'Run `nx g f <path to ngrx folder from src/app>/<feature name> --group --project=<app name> --module=<path to component>/<component file>`'

## Update NX project

Run: 
 - `nx migrate latest`
 - `npm install`
 - `nx migrate --run-migrations`
