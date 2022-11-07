/* eslint-disable no-console */
// noinspection JSUnusedGlobalSymbols

import { execSync } from 'child_process';

export default function () {
  const commands = [
    'docker compose up -d',
    'bin/import.sh',
  ];

  for (const command of commands) {
    try {
      execSync(command);
    } catch (exception) {
      console.log(exception?.message || exception);
    }
  }
}
