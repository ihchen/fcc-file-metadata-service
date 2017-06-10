var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/'});

var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.post('/get-file-size', upload.single('file'), function(req, res) {
	res.end(JSON.stringify({
		size : req.file.size
	}));
});

app.listen(process.env.PORT || 8000, function() {
	console.log("Connection established");
});