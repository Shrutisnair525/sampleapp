var express = require('express');
var app = express();

app.use(express.static('/home/shruti/project/sampleapp/'));

app.get('/new', function (req, res) {

//  res.sendFile('/home/shruti/project/sampleapp/pic.jpeg');
  res.sendFile('/home/shruti/Downloads/images-9.jpg');
//  res.send('Hello World!');

});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

app.post('/', function (req, res) {
//  res.send('Got a POST request');
    res.sendFile('/home/shruti/project/sampleapp/post.html');



});

/*app.put('/', function (req, res) {
  res.send('Got a PUT request at /user');
});*/
