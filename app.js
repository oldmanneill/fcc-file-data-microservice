var bodyParser = require("body-parser"),
    express = require("express"),
    app = express(),
    multer = require('multer'),
    upload = multer({ dest: 'uploads/' });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));



//routes - index
app.get('/', function(req, res) {
    res.redirect('/sizer');
});
app.get('/sizer', function(req, res) {
    res.render('index');
});

//create route
    app.post('/wutSize', upload.single('file'), function (req, res, next) {
        var theFile = req.file;
        console.log(req);
        res.render("show", { theFile: theFile });
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 

});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log('server is running');
});
