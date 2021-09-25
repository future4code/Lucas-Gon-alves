# Sistema Bancário

**_ Configurações - criações de arquivos e instalações de pacotes _**

- mkdir build src
- touch index.ts na src
- tsc --init
- npm init -y
- npm i express cors
- npm i @types/express @types/cors ts-node-dev typescript -D
- touch .gitignore
  - build
  - node_modules

**_ Configurações - edição de arquivos _**

- No package.json:
  "scripts":
  {
  "start": "clear && tsc && node build/.index.js",
  "dev": "ts-node-dev src/index.ts",
  }

- No tsconfig.json:
  {
  "compilerOptions": {
  "target": "es6",
  "module": "commonjs",
  "sourceMap": true,
  "outDir": "./build",
  "rootDir": "./src",
  "removeComments": true,
  "noImplicitAny": true, }
  }
