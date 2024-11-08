const express = require('express');
const mongoose = require('./config/db');
const reviewRoutes = require('./routes/reviews');
const scrapeOnRun = require('./routes/scrapeOnRun')
require('./utils/scheduler'); 

const app = express();
app.use(express.json());
app.use('/api/reviews', reviewRoutes);
app.use('/srcape-on-run',scrapeOnRun);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));