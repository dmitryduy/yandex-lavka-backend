import { Request, Response } from "express";
import {ICatalogItem} from "./types";

const express = require('express');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use('/images', express.static(__dirname + '/images'));
app.use(cors({
    origin: '*'
}));

const catalog: ICatalogItem = JSON.parse(fs.readFileSync('./catalog.json'));

app.get('/catalog', (req: Request, res: Response) => {
    res.json(catalog);
})

app.listen(PORT, () => {
    console.log('Server worked');
})