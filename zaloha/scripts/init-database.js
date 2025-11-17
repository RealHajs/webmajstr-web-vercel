const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Database configuration for XAMPP
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // No password for XAMPP default setup
  port: 3306,
  charset: 'utf8mb4',
};

async function initDatabase() {
  let connection;
  
  try {
    console.log('🔌 Připojování k MySQL serveru...');
    
    // Connect to MySQL server (without specifying database)
    connection = await mysql.createConnection(dbConfig);
    
    console.log('✅ Připojení k MySQL serveru úspěšné');
    
    // Read SQL files
    const setupSQL = fs.readFileSync(path.join(__dirname, 'database-setup.sql'), 'utf8');
    const seedSQL = fs.readFileSync(path.join(__dirname, 'seed-data.sql'), 'utf8');
    
    console.log('📖 Načítání SQL skriptů...');
    
    // Split SQL files into individual statements
    const setupStatements = setupSQL.split(';').filter(stmt => stmt.trim());
    const seedStatements = seedSQL.split(';').filter(stmt => stmt.trim());
    
    console.log('🗄️ Vytváření databáze a tabulek...');
    
    // Execute setup statements
    for (const statement of setupStatements) {
      if (statement.trim()) {
        await connection.query(statement);
      }
    }
    
    console.log('✅ Databáze a tabulky vytvořeny');
    
    console.log('🌱 Vkládání výchozích dat...');
    
    // Execute seed statements
    for (const statement of seedStatements) {
      if (statement.trim()) {
        await connection.query(statement);
      }
    }
    
    console.log('✅ Výchozí data vložena');
    
    // Test the database
    console.log('🧪 Testování databáze...');
    
    const [partners] = await connection.query('SELECT COUNT(*) as count FROM partners');
    const [news] = await connection.query('SELECT COUNT(*) as count FROM news');
    const [services] = await connection.query('SELECT COUNT(*) as count FROM services');
    
    console.log(`✅ Test úspěšný:`);
    console.log(`   - Partneři: ${partners[0].count}`);
    console.log(`   - Aktuality: ${news[0].count}`);
    console.log(`   - Služby: ${services[0].count}`);
    
    console.log('\n🎉 Databáze byla úspěšně inicializována!');
    console.log('📝 Nyní můžete spustit web pomocí: npm run dev');
    
  } catch (error) {
    console.error('❌ Chyba při inicializaci databáze:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Tip: Ujistěte se, že:');
      console.log('   1. XAMPP je spuštěný');
      console.log('   2. MySQL služba běží');
      console.log('   3. Port 3306 je dostupný');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n💡 Tip: Zkontrolujte přihlašovací údaje v XAMPP');
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run the initialization
initDatabase(); 