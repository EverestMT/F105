const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const eventRoutes = require('./src/routes/events');

const app = express();
app.set('views', path.join(__dirname, "src", 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', eventRoutes);

app.use((req, res) => res.status(404).render('error', { message: 'Nie znaleziono strony' }));

mongoose.connect('mongodb://127.0.0.1:27017/projektDB')
    .then(() => app.listen(3000, () => console.log('Serwer na http://localhost:3000')));