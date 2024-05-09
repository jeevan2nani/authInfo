const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/auth.route');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( ()=> console.log('Connected to MongoDb'))
.catch( err => console.log(err));

app.use(express.json());

app.use(cors());
app.options('*', cors());
app.use('/', routes);
app.listen( PORT, ()=> {
    console.log(`Server is Listening on ${PORT}`);
})