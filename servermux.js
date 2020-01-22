const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(express.static(__dirname + '/'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3500);

console.log('Running at Port 3500');