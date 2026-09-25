const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', function(req, res) {
    res.send({
        status: "Server is running, home path hit"
    });
});

// POST endpoint for Addition
app.post('/add', function(req, res) {
    let value1 = req.body.value1;
    let value2 = req.body.value2;

    let result = Number(value1) + Number(value2);

    res.send({
        status: "success",
        result: result
    });
});

// GET endpoint for Subtraction
app.get('/subtract/:value1/:value2', function(req, res) {
    let value1 = req.params.value1;
    let value2 = req.params.value2;

    let result = Number(value1) - Number(value2);

    res.send({
        status: "success",
        result: result
    });
});

// Start Server
app.listen(4433, function() {
    console.log("Server is running on port 4433");
    console.log("http://localhost:4433");
});