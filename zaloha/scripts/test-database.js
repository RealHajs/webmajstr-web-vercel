const mysql = require('mysql2/promise');

// Database configuration for XAMPP
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '', // No password for XAMPP default setup
  database: 'webmajstr_db',
  port: 3306,
  charset: 'utf8mb4',
  timezone: '+01:00',
};

async function testConnection() {
  let connection;
  
  try {
    console.log('🔌 Testování připojení k databázi...');
    
    connection = await mysql.createConnection(dbConfig);
    console.log('✅ Připojení k databázi úspěšné');
    
    // Test queries
    const [partners] = await connection.query('SELECT COUNT(*) as count FROM partners');
    const [news] = await connection.query('SELECT COUNT(*) as count FROM news');
    const [services] = await connection.query('SELECT COUNT(*) as count FROM services');
    
    console.log('📊 Stav databáze:');
    console.log(`   - Partneři: ${partners[0].count}`);
    console.log(`   - Aktuality: ${news[0].count}`);
    console.log(`   - Služby: ${services[0].count}`);
    
    console.log('\n✅ Databáze je připravena k použití!');
    
  } catch (error) {
    console.error('❌ Chyba při testování databáze:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Tip: Ujistěte se, že:');
      console.log('   1. XAMPP je spuštěný');
      console.log('   2. MySQL služba běží');
      console.log('   3. Port 3306 je dostupný');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.log('\n💡 Tip: Zkontrolujte přihlašovací údaje v XAMPP');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.log('\n💡 Tip: Databáze neexistuje. Spusťte: npm run db:init');
    }
    
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Run the test
testConnection(); 