import type { DatabaseInstance } from '@src/connection';
import { connection } from '@src/connection';

describe('surreal.connection', () => {
  let db: DatabaseInstance;

  beforeEach(async () => {
    db = await connection();
  });

  afterEach(async () => {
    await db.close();
  });

  it('should connect to the database', async () => {
    expect.assertions(1);

    const result = await db.select('test');

    expect(result).toHaveLength(3);
  });
});
