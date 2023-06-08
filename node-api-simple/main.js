const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [
    { id: 1, name: 'Produto 1' },
    { id: 2, name: 'Produto 2' },
    { id: 3, name: 'Produto 3' }
];

app.get('/products', (request, response) => {
    response.json(products);
});

app.post('/products', (request, response) => {
    const { id, name } = request.body;

    const newProduct = { id: id, name };

    products.push(newProduct);

    response.json(newProduct);
});

app.put('/products/:id', (request, response) => {
    const { id } = request.params;
    const { name } = request.body;

    let product = products.find(product => product.id === parseInt(id));
    product.name = name;

    response.json(product);
});

app.delete('/products/:id', (request, response) => {
    const { id } = request.params;
    products = products.filter(product => product.id !== parseInt(id));
    response.json(true);
});

app.listen(port, () => {
    console.log(`Serviço de produtos iniciado na porta ${port}`);
});
