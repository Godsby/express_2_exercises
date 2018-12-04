const express = require('express');
const app = express();
const port = 8000;

app.get('/:operator/:num1/:num2', (req, res) => {
    const {operator, num1, num2} = req.params;
    if (isNaN(num1) || isNaN(num2)) {
        res.send('Invalid inputs');
    } else {
        if (operator === 'add') {
            res.send({
                num1: parseInt(num1),
                num2: parseInt(num2),
                result: parseInt(num1) + parseInt(num2)});
        } else if (operator === 'sub') {
            res.send({
                num1: parseInt(num1),
                num2: parseInt(num2),
                result: parseInt(num1) - parseInt(num2)});
        } else if (operator === 'mul') {
            res.send({
                num1: parseInt(num1),
                num2: parseInt(num2),
                result: parseInt(num1) * parseInt(num2)});
        } else if (operator === 'div') {
            res.send({
                num1: parseInt(num1),
                num2: parseInt(num2),
                result: parseInt(num1) / parseInt(num2)});
        }
    }
})

app.get('/*', (req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
})

app.listen(port, () => {
    console.log('This is listening to port 8000 for Calculator - Four Routes')
})