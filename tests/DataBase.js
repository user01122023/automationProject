const { chromium } = require('playwright');
const mysql = require('mysql2/promise');

async function setup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Perform database operations
    await connectToDatabase(page);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

async function connectToDatabase(page) {
  try {
    const connection = await mysql.createConnection({
      host: '37.140.192.134',
      user: 'u0237203_admin',
      password: 'admin12345',
      database: 'u0237203_openstore'
    });

    // Perform database operations
    // For example, execute a query
    const [rows, fields] = await connection.execute('SELECT * FROM oc_customer');
    console.log(rows);

    // Close the database connection
    await connection.end();
  } catch (error) {
    console.error('Error performing database operations:', error);
    throw error; // Rethrow the error to propagate it to the calling function
  }
}


setup();

module.exports = {
  setup
}