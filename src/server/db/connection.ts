import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    user: 'bookstore_user2',
    password: 'password123',
    host: 'localhost',
    database: 'bookstore_database'
})

export default pool;