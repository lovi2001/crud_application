const express = require('express');
const app = express();
const connection = require("./database/db.js")
const router = require('./router/route.js');
const cors = require('cors');

const port = 8000;

connection();

app.use(express.json());
app.use(cors());
app.use('/', router);


app.listen(port , () => {
    console.log(`server is running successfully on port ${port}`);
});
