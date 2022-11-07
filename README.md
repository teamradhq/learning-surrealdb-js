# Learning `surrealdb.js`

## Setup

```bash
nvm use 18
npm install
docker compose build --no-cache
```

## Run the Tests

### 1. Start services and import test data:

```bash
docker compose up -d
./bin/import.sh
```

### 2. Run the tests:

```bash
npm run test
docker compose kill
```
