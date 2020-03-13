const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
var cors = require('cors')
app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { id: 1, text: 'Task 1' , status: 'open'},
  { id: 2, text: 'Task 2' , status: 'open'},
  { id: 3, text: 'Task 3' , status: 'open'},
  { id: 4, text: 'Task 4', status: 'open'},
  { id: 5, text: 'Task 5', status: 'open' }
];


app.get('/tasks', (req, res) => {
  console.log('Returning Taks list');
  res.send(tasks);
});

app.post('/tasks', (req, res) => {
  console.log("inside the post" + req.body.id);
  let newTask ={};
  newTask["id"] = req.body["id"];
  newTask["text"] = req.body["text"];
  newTask["status"] = req.body["status"];
  console.log(newTask);
  tasks.push(newTask);
  res.status(301).header({Location: `http://localhost:${port}/tasks`}).send(newTask);
});

app.post('/tasks/**', (req, res) => {
  const taskId = parseInt(req.params[0]);
  const foundTask = tasks.find(subject => subject.id === taskId);

  if (foundTask) {
	  foundTask("status") = req.body["status"];
      res.status(202).header({Location: `http://localhost:${port}/tasks/${foundTask.id}`}).send(foundTask);
  } else {
      console.log(`Task not found.`);
      res.status(404).send();
  }
});


console.log(`Tasks service listening on port ${port}`);
app.listen(port);