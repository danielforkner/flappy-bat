const { client, addScore } = require('./index');

async function createInitialScores() {
  try {
    console.log('Seeding scores...');

    await addScore({
      player: 'DCF',
      score: 5,
    });

    await addScore({
      player: 'DH',
      score: 10,
    });
  } catch (error) {
    console.error('Failed to add scores.');
    throw error;
  }
}

async function dropTables() {
  try {
    console.log('Dropping tables...');

    await client.query(`
        DROP TABLE IF EXISTS scores`);
  } catch (error) {
    throw error;
  }
}

async function createTables() {
  try {
    console.log('Building tables...');

    await client.query(`
        CREATE TABLE scores (
            player varchar(255) NOT NULL,
            score integer NOT NULL
        );
        `);
  } catch (error) {
    throw error;
  }
}

async function seedDB() {
  console.log('Seeding DB...');
  try {
    client.connect();

    await dropTables();
    await createTables();
    await createInitialScores();

    console.log('DONE seeding DB');
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

seedDB();
