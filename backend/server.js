const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;
const DUMP_DIR = path.join(__dirname, 'data', 'dumps');

app.use(bodyParser.text({ limit: '2kb' }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

function getTodayFilename() {
    const today = new Date().toISOString().split('T')[0];
    return path.join(DUMP_DIR, `${today}.txt`);
}

app.post('/api/dump', (req, res) => {
    const data = req.body;
    const size = Buffer.byteLength(data, 'utf-8');

    if (size > 1024) {
        return res.status(400).send(`Dump too big: ${size} bytes (max 1024)`);
    }

    if (!fs.existsSync(DUMP_DIR)) {
        fs.mkdirSync(DUMP_DIR, { recursive: true });
    }

    const filePath = getTodayFilename();

    fs.writeFileSync(filePath, data, 'utf-8');
    res.send('Dump saved');
});

app.get('/api/dump/:date', (req, res) => {
    const date = req.params.date;
    const filePath = path.join(DUMP_DIR, `${date}.txt`);

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('No dump found for this date.');
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
