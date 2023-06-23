import express from "express";
import cors from 'cors';
import fs from 'fs';

const path = '/api/v1';
const json = fs.readFileSync('./data.json');
const index = fs.readFileSync('./index.html');
const data = JSON.parse(json);

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
    res.set('Content-Type', 'text/html');
    res.send(index);
});

app.get(path + '/company/info', (req, res) => {
    res.json(data.company.info);
});

app.get(path + '/company/employees', (req, res) => {
    res.json(data.company.employees);
});

app.get(path + '/company/statistic', (req, res) => {
    res.json(data.company.statistic);
});

app.get(path + '/projects/year', (req, res) => {
  res.json(data.projects);
});

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log("Server error: ", err);
    }
    console.log("Server OK");
});
