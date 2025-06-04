import mysql from "mysql2/promise";

let pool;

export const initializeDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\``
    );
    console.log(`✅ Database ${process.env.DB_NAME} ensured.`);
    await connection.end();
  } catch (err) {
    console.error("❌ Error creating database:", err.message);
  }
};

export const initializePoolAndTable = async () => {
  try {
    pool = await mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    await pool.query(`
      CREATE TABLE IF NOT EXISTS schools (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL,
        latitude FLOAT NOT NULL,
        longitude FLOAT NOT NULL
      )
    `);
    console.log('✅ Table "schools" ensured.');
  } catch (err) {
    console.error("❌ Error creating pool and table:", err.message);
  }
};

export const getPool = () => pool;
