var express = require('express'),
    multer = require('multer'),
    app = express();
var upload = multer({ dest: "uploads/" });

// Default home page
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Get filesize when a file is uploaded by the user
app.post('/get-file-size', upload.single('file'), function(req, res){
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.charset = 'utf-8';
    // Send the filesize back
    res.send({
        "size": req.file.size
    });
});

var server = app.listen(8000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s.', port);
});
