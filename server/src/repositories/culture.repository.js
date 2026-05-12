import pool from '../config/database.config.js';

export const findAllCultures = async () => {
  const query = {
    text: `SELECT
        id,
        name,
        "photoUrl",
        description
        FROM cultures`,
  };

  const result = await pool.query(query);
  return result.rows;
};
