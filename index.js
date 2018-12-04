const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
    res.send('Welcome to the \'Rock, Paper, and Scissors\' game');
});

app.get('/rock', (req, res) => {
    const scenario = [
        {
            user: "rock",
            ai: "rock",
            result: "Tie"
        },
        {
            user: "rock",
            ai: "paper",
            result: "Lose"
        },
        {
            user: "rock",
            ai: "scissors",
            result: "Win"
        },
    ]

    const ai = Math.floor(Math.random() * 3);
    res.json(scenario[ai]);
});

app.get('/paper', (req, res) => {
    const scenario = [
        {
        "user": "paper",
        "ai": "rock",
        "result": "Win"
        },
        {
        "user": "paper",
        "ai": "paper",
        "result": "Tie"
        },
        {
        "user": "paper",
        "ai": "scissors",
        "result": "Lose"
        },
    ]
    const ai = Math.floor(Math.random() * 3);
    res.json(scenario[ai]);
});

app.get('/scissors', (req, res) => {
    const scenario = [
        {
        "user": "scissors",
        "ai": "rock",
        "result": "Lose"
        },
        {
        "user": "scissors",
        "ai": "paper",
        "result": "Win"
        },
        {
        "user": "scissors",
        "ai": "scissors",
        "result": "Tie"
        },
    ]
    const ai = Math.floor(Math.random() * 3);
    res.json(scenario[ai]);
});

app.listen(port, () => {
    console.log('This is listening to port 8000');
})