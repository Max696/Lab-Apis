var express =  require('express');
var mongoose = require('mongoose');
var bodyParser=require('body-parser');

//mongoose.connect('mongodb://ivan_arango:cocacola123@ds151293.mlab.com:51293/proyectoed2', { useNewUrlParser: true });
//mongodb://CM018:Prueba1223@ds161183.mlab.com:61183/estructuras2
mongoose.connect('mongodb://prueba:this.prueba123@ds161183.mlab.com:61183/estructuras2', { useNewUrlParser: true });

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  // (*) = cualquier origen
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    //verbos permitidos
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

limit = 52428800; 
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// ruta http://192.168.1.13:1000/api/status
app.use('/api',require('./routes/api'));

app.listen(2000);
console.log('Server is running on port 2000');

