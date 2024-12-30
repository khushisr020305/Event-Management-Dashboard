// db.js
import pkg from 'pg'; // Import the pg package
const { Pool } = pkg; // Destructure Pool from the imported pg package

// Database connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'event_management',
  password: 'khushi',
  port: 5432,
});

export { pool }; // Export pool for use in other files
