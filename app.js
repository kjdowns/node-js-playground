const express = require('express');

const app = express();

// Routes

app.get('/', (req, res) => {
    res.send('We are on home!');
});

// Listen to server
app.listen(3000);

