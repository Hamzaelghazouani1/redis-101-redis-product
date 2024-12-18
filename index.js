const express = require('express');

const app = express();

app.use(express.static('static',{index: ['app.html', 'index.html']}));

app.use('/product', require('./product'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

