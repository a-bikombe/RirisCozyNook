const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure database folder exists
const dbDir = path.join(__dirname, 'db');
if (!fs.existsSync(dbDir))
{
    fs.mkdirSync(dbDir);
}

// Connect to SQLite database (no table creation here)
const dbPath = path.join(dbDir, 'nook.db');
const db = new sqlite3.Database(dbPath, (err) =>
{
    if (err)
    {
        console.error('Could not connect to database:', err.message);
    } else
    {
        console.log('Connected to database');
    }
});

// Test route
app.get('/', (req, res) =>
{
    res.send('Welcome to the Riri\'s Cozy Nook Database!');
});

// New: Crew route
app.get('/crew', (req, res) =>
{
    db.all('SELECT * FROM Crew', [], (err, rows) =>
    {
        if (err)
        {
            console.error(err.message);
            res.status(500).json({ error: 'Failed to fetch crew members' });
        } else
        {
            res.json(rows);
        }
    });
});

app.listen(PORT, () =>
{
    console.log(`Server running at http://localhost:${PORT}`);
});
