const express = require('express');
const app = express();
const PORT = 3001;
const mongoose = require('mongoose');

// ===== DATA BASE SETUP =====
const
    username = "MalekAlsayed",
    password = "3368671636302586AbuAnas",
    database = 'TaskMan';
    BASE_URL = `mongodb+srv://${username}:${password}@cluster0.aigfhce.mongodb.net/${database}?retryWrites=true&w=majority`;


mongoose.connect(BASE_URL).then(
    console.log('Connected to Database')
).catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})