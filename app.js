const express = require('express');
const bodyParser = require('body-parser');
const request  = require('request');
const exp = require('constants');

const app = express();

app.listen(3000, ()=>{

    console.log('Server running on port 3000!')
});