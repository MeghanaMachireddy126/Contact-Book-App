// backend/server.js

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to Neon PostgreSQL using connection string from .env
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,  // Required for Neon cloud connections
  },
});

// Create table if it doesn't exist
pool.query(`
  CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL
  )
`, (err) => {
  if (err) console.error('Error creating contacts table:', err.message);
  else console.log('Contacts table is ready');
});

// Validation regex
const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
const validatePhone = (phone) => /^\d{10}$/.test(phone);

// POST /contacts - Add contact with validation
app.post('/contacts', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  if (!validatePhone(phone)) {
    return res.status(400).json({ error: 'Phone must be exactly 10 digits' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
      [name, email, phone]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error adding contact:', error.message);
    res.status(500).json({ error: 'Failed to add contact' });
  }
});

// GET /contacts?page=1&limit=10 - List contacts with pagination
app.get('/contacts', async (req, res) => {
  let { page = 1, limit = 10 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  if (page < 1) page = 1;
  if (limit < 1) limit = 10;

  const offset = (page - 1) * limit;

  try {
    const countResult = await pool.query('SELECT COUNT(*) FROM contacts');
    const total = parseInt(countResult.rows[0].count);

    const contactsResult = await pool.query(
      'SELECT * FROM contacts ORDER BY id DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    res.json({ contacts: contactsResult.rows, total });
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// DELETE /contacts/:id - Delete a contact
app.delete('/contacts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteResult = await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    if (deleteResult.rowCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error('Error deleting contact:', error.message);
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
