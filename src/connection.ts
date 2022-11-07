import Surreal from 'surrealdb.js';

/**
 * Get a connection from the database,
 */
export async function connection() {
  const db = new Surreal('http://localhost:8101/rpc');

  await db.signin({
    user: 'root',
    pass: 'root',
  });

  await db.use('test', 'test');

  return db;
}

export type DatabaseInstance = Awaited<ReturnType<typeof connection>>;
