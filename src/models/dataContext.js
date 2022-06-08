const sqlite = require('better-sqlite3-with-prebuilds');
const db = new sqlite('../test.db');

export default db;