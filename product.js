const express = require('express');
const axios = require('axios');

const app = express();

const route = express.Router();

const URL = "https://dummyjson.com/products";

route.get('/', async (req, res) => {
    const products = await axios.get(URL);
    res.send(products.data);    
});

module.exports = route;