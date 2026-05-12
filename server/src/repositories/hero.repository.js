import pool from '../config/database.config.js';

export const findAllHeroes = async () => {
  const query = {
    text: `
    SELECT 
      "id", 
      "name", 
      "ascencionDocumentNumber", 
      "ascencionDocumentDate", 
      "ascencionYear", 
      "photoUrl", 
      "birthDate", 
      "birthPlace", 
      "deathDate", 
      "deathPlace", 
      "burialPlace", 
      "description"
    FROM heroes;
`,
  };

  const result = await pool.query(query);
  return result.rows;
};
