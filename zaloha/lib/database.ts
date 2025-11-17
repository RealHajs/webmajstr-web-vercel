import mysql from "mysql2/promise"

// Database configuration for XAMPP (lokální vývoj)
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // default XAMPP = prázdné heslo
  database: "webmajstr_db",
  port: 3306,
  charset: "utf8mb4",
  timezone: "+01:00",
}

// Connection pool
const pool = mysql.createPool({
  ...dbConfig,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

// Test DB připojení
export async function testConnection() {
  try {
    const connection = await pool.getConnection()
    console.log("Database connected successfully")
    connection.release()
    return true
  } catch (error) {
    console.error("Database connection failed:", error)
    return false
  }
}

// Obecný query helper
export async function executeQuery(query: string, params: any[] = []) {
  try {
    const sanitizedParams = params.map((p) => (p === undefined ? null : p))
    const [rows] = await pool.execute(query, sanitizedParams)
    return rows
  } catch (error) {
    console.error("Query execution failed:", error)
    throw error
  }
}

// Vrátí jen jeden řádek
export async function executeQuerySingle(query: string, params: any[] = []) {
  try {
    const sanitizedParams = params.map((p) => (p === undefined ? null : p))
    const [rows] = await pool.execute(query, sanitizedParams)
    return Array.isArray(rows) && rows.length > 0 ? rows[0] : null
  } catch (error) {
    console.error("Query execution failed:", error)
    throw error
  }
}

// Ukončení poolu
export async function closePool() {
  await pool.end()
}

export default pool
