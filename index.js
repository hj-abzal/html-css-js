import express from 'express';
import * as path from "path";

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve('static/index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});