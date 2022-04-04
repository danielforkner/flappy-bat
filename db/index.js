const { Client } = require('pg');

const client = new Client({
  connectionString:
    process.env.DATABASE_URL || 'postgres://localhost:5432/flappy_scores',
});

async function addScore({ player, score }) {
  try {
    await client.query(
      `
        INSERT INTO scores(player, score)
        VALUES ($1, $2);
        `,
      [player, score]
    );
  } catch (error) {
    throw error;
  }
}

module.exports = {
  client,
  addScore,
};
