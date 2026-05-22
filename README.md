# template-angular-vps

Template GitHub per frontend Angular 19 (standalone components) + Karma/Jasmine, deployato come **file statici** in `/var/www/<nome>/` sul VPS `zaknafein.ovh`.

Stessa filosofia di `template-vite-vps`: niente Docker, nginx serve direttamente i file `dist/`.

## Stack

| Layer | Tecnologia |
|---|---|
| Framework | Angular 19 |
| Linguaggio | TypeScript 5.6 |
| Test | Karma + Jasmine (in CI Chrome headless) |
| Deploy | rsync su `/var/www/<nome>/` |

## Pattern split frontend/backend

```
https://myapp.zaknafein.ovh/       → Angular (questo template)
https://myapp.zaknafein.ovh/api/*  → backend
```

API URL relativo `/api`, proxato da nginx.

## Sviluppo locale

```bash
npm install
npm start
# → http://localhost:4200
```

## Build

```bash
npm run build
# Output: dist/myapp/browser/
```

## Test

```bash
npm test
```

## Init

```bash
./init-rename.sh <nome-progetto>
```

## Licenza

[MIT](LICENSE)
