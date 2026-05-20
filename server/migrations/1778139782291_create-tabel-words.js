/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  pgm.renameColumn('words', 'createdAt', 'created_at');

  pgm.renameColumn('words', 'updatedAt', 'updated_at');
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */

export const down = (pgm) => {
  pgm.renameColumn('words', 'created_at', 'createdAt');

  pgm.renameColumn('words', 'updated_at', 'updatedAt');
};
