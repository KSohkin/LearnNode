import express from 'express';
const app = express();
const port = 3000;

let messages = [];

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'content-type');
    next();
});

app.get('/', (req, res) => {
    let date = req.query.date ?? null;
    let filteredMessages = messages.filter(message => message.date > new Date(date));
    res.json(filteredMessages);
});

app.post('/', (req, res) => {
    messages.push({message: req.body.message, date: new Date()});
    res.json(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});