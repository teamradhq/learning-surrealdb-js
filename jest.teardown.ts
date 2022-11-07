// noinspection JSUnusedGlobalSymbols

import { execSync } from 'child_process';

export default function () {
  execSync('docker compose kill > /dev/null 2>&1');
}
