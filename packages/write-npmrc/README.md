# write-npmrc
## Usage
Set `NPM_TOKEN` and `NPM_REGISTRY_URL` (optional) environment variables, then in your `package.json`:
```
  ...
  "preinstall": "npx @goldwasserexchange/write-npmrc",
  ...
```
