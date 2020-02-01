const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use('/public',express.static(path.join(__dirname,'static')));

app.get("/", (request, response) => {
  response.sendfile(path.join(__dirname,'static','index.html'));
});

app.post('/',(request,response)=>{
  console.log(request.body);
  // Database stuff
  response.send("Successfull");
});

app.listen(3005);
